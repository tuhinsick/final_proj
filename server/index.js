const express = require('express');
const cors = require('cors');
const pool = require('./db');

const port = process.env.PORT || 5002;
// const jwt = require('jsonwebtoken');

require('dotenv').config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

 
async function run(){
    try{
        //register a student to the database 
        // email, firstname, lastname, password, date_of_birth, mobile, city, country
        app.post("/register", async (req, res) => {
            try {
              const {st_name, st_age, st_address } = req.body;
              const newStudent = await pool.query(
                "INSERT INTO STUDENTS (st_name, st_age, st_address) VALUES($1, $2, $3) RETURNING *",
                [st_name, st_age, st_address]
              );
              res.json(newStudent.rows[0]);
            } catch (err) {
              console.error(err.message);
            }
        });

        //for a new course
        app.post("/courses/entry", async (req, res) => {
            try {
                console.log(req.body);
                const {name, price, description, photo} = req.body;
                const newCourse = await pool.query(
                "INSERT INTO COURSES (cr_name, cr_price, cr_description, cr_image) VALUES($1, $2, $3, $4) RETURNING *",
                [name, price, description, photo]
              );
          
              res.json(newCourse.rows[0]);
            } catch (err) {
              console.error(err.message);
            }
        });
         //get all the courses 
        app.get("/courses", async (req, res) => {
            try {
              const allCourses = await pool.query("SELECT * FROM courses");
              res.json(allCourses.rows);
            } catch (err) {
              console.error(err.message);
            }
        });

        app.get("/courses/:course_id", async (req, res) => {
          // console.log(req.params);
          const courseId = req.params.course_id;
        
          try {
            const course = await pool.query("SELECT * FROM courses WHERE course_id = $1", [courseId]);
            // console.log(course);
            if (course.rows.length === 1) {
              res.json(course.rows[0]);
            } else {
              res.status(404).json({ message: 'Course not found' });
            }
        
          } catch (err) {
            console.error(err.message);
            // res.status(500).json({ message: 'Internal server error' });
          }
        });
        // app.get('/courses', async (req, res) => {
        //   try {
        //     // const client = await pool.connect();
        //     // const result = await client.query('SELECT * FROM courses');
        //     const courses = result.rows;
        //     client.release();
        //     res.json(courses);
        //   } catch (error) {
        //     console.error('Error fetching courses', error);
        //     res.status(500).send('Internal Server Error');
        //   }
        // });

        //update a course
        app.put("/courses/:id", async (req, res) => {
            console.log(req.body);
            try {
                const { id } = req.params;
                const { cr_name, cr_price, cr_description, cr_image } = req.body;
                const updateCourse = await pool.query(
                "UPDATE COURSES SET cr_name = $1, cr_price = $2, cr_description = $3, cr_image = $4  WHERE course_id = $5",
                [cr_name, cr_price, cr_description, cr_image, id]
                );
            
                res.json("Course was updated!");
            } catch (err) {
                console.error(err.message);
            }
        });
        
        //delete a course
        app.delete("/courses/:id", async (req, res) => {
            try {
                const { id } = req.params;
                const deleteCourse = await pool.query("DELETE FROM courses WHERE course_id = $1", [
                id
                ]);
                res.json("Course was deleted!");
            } catch (err) {
                console.log(err.message);
            }
        });

    }finally{

    }
    
}

//running the function
run().catch(err => console.error(err));

//testing the server if it's working 
app.get('/', (req, res) => {
    res.send("courses server is running");
})
//listening to the port
app.listen(port, () => {
    console.log(`test server running on ${port}`);
})

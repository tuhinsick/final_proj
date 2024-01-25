import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import CourseInstructors from "./Course_Instructors";
import PrivateRoute from "../../Routes/PrivateRoute/PrivateRoute";

const SingleCourse = () => {
    const course = useLoaderData();

    const {user} = useContext(AuthContext);
    const {course_id, course_name,  course_description, course_price, image_url} = course;
    const user_id = user?.id;
    const [teachers, setTeachers] = useState([]);

    //loading the related teachers with this course
    useEffect(()=>{
        fetch(`http://localhost:5002/courses/teachers/${course_id}`)
        .then(res => res.json())
        .then(data =>setTeachers(data.teachers))
    },[]);

    console.log(teachers);


    const handleCourseEnroll = async()=> {
        console.log(course_id, user_id);
        try {
            const response = await fetch('http://localhost:5002/enroll', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ course_id, user_id}),
            });
      
            if (response.ok) {
              const enrollmentData = await response.json();
              console.log('Enrollment successful:', enrollmentData);
              // Optionally, you can handle successful enrollment here, such as updating state or displaying a success message.
            } else {
              const errorData = await response.json();
              console.error('Enrollment failed:', errorData.message);
              // Handle enrollment failure, display an error message, etc.
            }
          } catch (error) {
            console.error('Error during enrollment:', error.message);
            // Handle any unexpected errors
          }
    }

    return ( 
        <>
        <div className="w-[85%] m-auto mt-12">
        <div className='grid grid-cols-2 items-center gap-10 relative'>
            <div>
                <h1 className="my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-gray-400">{course_name}</span> </h1>

                <p className='my-4'>{course_description}</p>
                <div>
                    <PrivateRoute><button onClick={handleCourseEnroll} className="btn text-2xl btn-success w-[500px] absolute bottom-0 left-0">Enroll</button></PrivateRoute>
                </div>
            </div>
            <div>
                <img className='w-full shadow-2xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src={image_url} alt="" />
            </div>
        </div>
        {/* teachers int the course section */}
        <div className="my-20 text-center bg-slate-200">
            <h2 className="text-5xl py-10 uppercase">course instructors</h2>
            {
                teachers.map(teacher => 
                    <CourseInstructors key={teacher.user_id} teacher = {teacher}/>
                )
            }
        </div>
        
        </div>
        </>
     );
}
 
export default SingleCourse;
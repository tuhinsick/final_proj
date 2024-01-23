import React, { useContext, useEffect, useState } from 'react'
import Course from './Course';
// import CoursesContext from "../context/CoursesContextProvider";
// import CoursesContext from '../context/oursesContext';

const Courses = () =>{ 
    const [courses, setCourses] = useState([]);
    // const {courses, setCourses} = useContext(CoursesContext);

    useEffect(()=>{
        fetch("http://localhost:5002/courses")
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[]);
    
    console.log(courses);

    //delete operation
    const handleDelete = id =>{
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if(proceed){
            fetch(`http://localhost:5002/courses/${id}`, {
                method: 'DELETE'
               })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
        window.location = '/courses';
    }
    
  return (
    <>
    <div className='text-5xl ml-40  md-10 text-black'>
        All Courses ( {courses.length} )
    </div>
    <div className='grid grid-cols-2 bg-white w-[86%] m-auto'>
    {
        courses.map(course => 
            <Course key={course.course_id} course = {course} handleDelete={handleDelete} />
        )
    }
    </div>
    </>
    
  )
}
export default Courses;

//

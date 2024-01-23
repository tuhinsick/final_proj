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
    <div className='w-[86%] m-auto mt-10'>
    <div className='mb-40 text-black flex justify-between gap-40'>
        <div>
            <h2 className='text-5xl mb-5' >Course Catalog</h2>
            <p>Interactive LIVE & Self-Paced Courses with Individual Attention by Industry Leading Gurus to Encourage Out-of-the-box thinking, leading to Clarity in Concepts, Creativity and Innovative Ideas.</p>
        </div>
        {/* input  */}

        <form class="flex items-center w-[1000px]">   
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
                    </svg>
                </div>
                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search courses here..." required/>
                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
                    </svg>
                </button>
            </div>
            <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>Search
            </button>
        </form>
        {/* end  */}

        
    </div>
    <p className='text-2xl'>All Courses ( {courses.length} )</p>
    <div className='grid grid-cols-2 bg-white'>
    {
        courses.map(course => 
            <Course key={course.course_id} course = {course} handleDelete={handleDelete} />
        )
    }
    </div>
    </div>
    
  )
}
export default Courses;

//

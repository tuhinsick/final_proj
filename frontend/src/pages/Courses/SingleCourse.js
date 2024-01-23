import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
    
    const handleCourseEnroll =()=> {

    }

    const course = useLoaderData();
    // console.log(service)
    const {course_id, course_name,  course_description, course_price, total_lectures, duration, image_url} = course;
    return ( 
        <>
        <div className='grid grid-cols-2 items-center gap-10'>
            <div>
                <h1 className="my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-gray-400">{course_name}</span> </h1>

                <p className='my-4'>{course_description}</p>
            </div>
            <div>
                <img className='w-full shadow-2xl' src={image_url} alt="" />
            </div>
        </div>
        <div>
        <button onClick={handleCourseEnroll} className="btn text-2xl btn-success w-80">Enroll</button>
        </div>
        </>
     );
}
 
export default SingleCourse;
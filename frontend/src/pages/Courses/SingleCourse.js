import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const SingleCourse = () => {
    const course = useLoaderData();
    // console.log(service)
    const {user, setUser} = useContext(AuthContext);
    const {course_id, course_name,  course_description, course_price, total_lectures, duration, image_url} = course;
    const user_id = user?.id;

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
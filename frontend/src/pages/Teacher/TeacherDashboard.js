import { useContext, useEffect, useState } from "react";
import courseFinder from "../../apis/courseFinder";
import { AuthContext } from "../../context/AuthProvider";
import Course from "../Courses/Course";
import CourseMain from "../../shared/CourseMain/CourseMain";
import CourseTeacherCard from "../CourseTeacher/CourseTeacherCard";

const TeacherDashboard = () => {
    //load the course using course_teacher table
    const [coursesTeacher, setCoursesTeacher] = useState([])
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(user?.username);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await courseFinder.get(`/teacher-courses/${user.id}`)
                // const data = await response.json();
                console.log(response?.data?.courses)
                setCoursesTeacher(response?.data?.courses);
            } catch (error) {

            }
        }
        fetchData()
    }, []);

    console.log(coursesTeacher)
    return ( 
        <>
            <div>
                <h1 className="text-5xl border-2xl">Teacher dashboard</h1>
            </div>
            {/* your courses section  */}
            <section>
                <h2>Courses {user?.username} teach  </h2>
                <div>
                    {
                        coursesTeacher.map(course => 
                            <CourseTeacherCard key = {course.course_id} course = {course} />
                        )
                    }
                </div>
                
            </section>
        </>
    );
}
 
export default TeacherDashboard;
import { Link } from "react-router-dom";
import AddLectures from "./AddLectures";

const CourseTeacherCard = ({course}) => {
    const {course_id, course_name,  course_description, course_price, total_lectures, duration, image_url} = course;
    
    // const [teachers, setTeachers] = useState([]);

    //loading the related teachers with this course
    // useEffect(()=>{
    //     fetch(`http://localhost:5002/courses/teachers/${course_id}`)
    //     .then(res => res.json())
    //     .then(data =>setTeachers(data.teachers))
    // },[]);


    // console.log(teachers[0]?.username)
    //truncate text
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      } else {
        // Truncate the text to the nearest word within the specified length
        const truncatedText = text.substr(0, text.lastIndexOf(' ', maxLength));
        return `${truncatedText}...`;
      }
    };
    return ( 
        <div>
            <div className="w-[70%] ml-32 p-8">
            <div className="card card-side bg-base-100 shadow-xl p-6">
            <figure className="border-2xl"><img className="w-[450px] h-[300px]" src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="text-4xl">{course_name}</h2>
                <p>{course_description}</p>
                <div className="card-actions justify-end">
                <Link to={`/courses/main/${course_id}`}><button className="btn btn-primary">Teach</button></Link>
                </div>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default CourseTeacherCard;
import { useLoaderData } from "react-router-dom";

const LessonPage = () => {
    const lesson = useLoaderData();
    return ( 
        <>
            this is lessonpage
        </>
     );
}
 
export default LessonPage;
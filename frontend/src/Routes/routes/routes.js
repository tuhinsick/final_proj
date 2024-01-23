import { createBrowserRouter } from "react-router-dom";

import Main from "../../layout/Main";
import Register from "../../pages/Register";
import ErrorPage from "../../pages/ErrorPage";
import Login from "../../pages/Login";
import Home from "../../pages/Home/Home";
import Courses from "../../pages/Courses/Courses";
import Blogs from "../../pages/Blogs/Blogs";
import SingleCourse from "../../pages/Courses/SingleCourse";
import About from "../../pages/About/About";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/about',
                element:<About></About>
            },
            // {
            //     path:'/mycourses',
            //     element:<PrivateRoute><MyCourses></MyCourses></PrivateRoute>
            // },
            // {
            //     path:'/addcourses',
            //     element:<PrivateRoute><AddCourses></AddCourses></PrivateRoute>
            // },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'courses/:id',
                element:<SingleCourse></SingleCourse>,
                // loader:({params})=> fetch(`https://assignment-11-server-topaz.vercel.app/services/${params.id}`)
                loader:({params})=> fetch(`http://localhost:5002/courses/${params.id}`)
            },
            // {
            //     path:'/about',
            //     element:<About></About>
            // },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    // {
    //     path:'/login',
    //     element:<LoginLayout></LoginLayout>,
    //     children:[
    //         {
    //             path:'/login',
    //             element:<Login></Login>
    //         },
    //         {
    //             path:'/register',
    //             element:<Register></Register>
    //         }
    //     ]
    // },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])
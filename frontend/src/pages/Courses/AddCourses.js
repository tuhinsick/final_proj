const AddCourses = () => {
    const handleSubmit = async event =>{
        event.preventDefault();
        //calling the form with event.target
        const form = event.target;
        //firstname and lastname add kore fullname banano 
        const name = form.name.value;
        //going inside the form and then calling the name of the input and then .value to get the value
        // const title = form.title.value;
        const photoURL = form.photoURL.value;
        const description = form.description.value;
        const price = form.price.value;
        
        //this is very important, but often overlooked. Here we are creating an object named order than passing it using the post api method. This is how we generally create object to store future value.
        const course = {
            name: name,
            price: price,           
            description: description,
            photo: photoURL,
        }
        try{
          const response = await fetch('http://localhost:5002/courses/entry', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(course)
               
          }) 
          window.location = '/';
          console.log(response.body);
        }catch{
    
        }
    
        //reseting the form after it has been submitted
            form.reset();
            console.log('hit add');
            // console.log(course.name, course.price, course.description, course.photo);
    }
      return (
        <div className='max-w-screen-xl mx-auto bg-white'>
                <form onSubmit={handleSubmit}  className='border-3 shadow-2xl w-[1200px] mt-24  mb-32 p-8 bg-white'>
                <h1 className='text-4xl font-semibold text-blue-600 mb-5'>ADD NEW COURSE</h1>
                {/* name */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-blue-500">What is the name of this course?</span>
                    </label>
                    <input  type="text"  name='name' placeholder="name" className="input input-bordered w-full bg-slate-200"  required/>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-blue-500">Give us a photo to display:</span>
                    </label>
                    <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered w-full bg-slate-200"  required/>
                    </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-blue-500">What is the price of this course?</span>
                    </label>
                    <input type="text" name='price' placeholder="price" className="input input-bordered w-full bg-slate-200"  required/>
                    </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-blue-500">Course Description:</span>
                    <span className="label-text-alt"></span>
                </label> 
                <textarea className="textarea textarea-bordered h-24 bg-slate-200" name='description' placeholder="description" required></textarea>
                </div>
                <button type="submit" class="w-full inline-block px-6 py-2 border-2 mt-5 border-blue-600 text-xl text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-blue-500 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    ADD COURSE
                </button>
                </form>
            </div>
      )
}
 
export default AddCourses;
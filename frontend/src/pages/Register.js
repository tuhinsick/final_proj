import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorFirebase, setErrorFirebase] = useState('');
    const [errorPassConfirm, setErrorPassConfirm] = useState('');

    const handleSubmit = event=>{
        event.preventDefault(); 
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       
       
    }
    //password setting 
    const handlePassword = (event) =>{
        if(!/(?=.{8,})/.test(event.target.value)){
            setErrorPass("password must be 8 characters");
            return;
        }
        if(! /(?=.*[a-zA-Z])/.test(event.target.value)){
            setErrorPass("password must have a Uppercase letter")
            return;
        }
        if(! /(?=.*[!#$%&?@*^ "])/.test(event.target.value)){
            setErrorPass("password must have atleast one special character")
            return;
        }
        setErrorPass("");
        // setPassword(event.target.value);
    }

  return (
    <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-2 gap-[100px] lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                    <img className='w-[400px] shadow-2xl rounded-2xl' src="https://www.pngitem.com/pimgs/m/48-488412_transparent-game-piece-png-chess-pawn-png-png.png" alt="" />
           
                </div>
                <div onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-[450px]">
                <form className="card-body">
                    <h1 className="text-4xl font-bold">Create an account</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    {/* email, firstname, lastname, password, date_of_birth, mobile, city, country */}
                    <input type="email" name='email' placeholder="abcd@gmail.com" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile</span>
                    </label>
                    <input type="text" name='mobile' placeholder="810xxxxxxxxxx" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Country Name</span>
                    </label>
                    <input type="text" name='country' placeholder="country name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" />
                   
                    <label className="label">
                        <p className='label-text-alt'>Already have an account?</p><Link to='/login' className="label-text-alt link link-hover">Login</Link>
                    </label>
                    </div>
                    <p className='text-rose-600 font'>{error}</p>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">REGISTER</button>
                    </div>
                    
                </form>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Register
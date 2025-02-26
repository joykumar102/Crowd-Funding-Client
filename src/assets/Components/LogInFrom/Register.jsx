import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

const Register = () => {

    const navigate = useNavigate();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');

    const handleRegister = e =>{
        
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!passwordRegex.test(password)){
        setErrorMessage('At least one uppercsse, one lowercase and password should be 6 cheracters or longer');
        return;
    }
       // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            updateUserProfile({displayName: name, photoURL: photo});
            // setUser();
            e.target.reset();
            navigate("/");
        })
        .catch(error => {
            console.log('ERROR', error.massage) 
        })
    }
    return (
        <div className="hero  ">
        <div className="">
        <h2 className='text-4xl font-semibold text-center mb-10'>Register Now</h2>
            <div className=" border-2 rounded-xl">   
                <form  onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name"  className="input input-bordered lg:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email"  name='email' placeholder="email" className="input input-bordered lg:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Photo URL</span>
                        </label>
                        <input type="text"  name='photo' placeholder="photo url" className="input input-bordered lg:w-96" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                            
                        </label>
                        <input type={showPassword ? 'text' : 'password'}
                        name='password' 
                        placeholder="password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 top-14'>
                              
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            {
                                ErrorMessage && <p className='text-red-700'>{ErrorMessage}</p>
                            }
                        
                    </div>
                    <div className="form-control mt-10">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='px-4 mb-4 '>Already have an account ? Please <Link to="/Login">Login</Link>.</p>
            </div>
        </div>
    </div>
    );
};

export default Register;
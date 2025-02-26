import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
    }


    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.log('EROOR', error.message))

    }
    return (
      <div className="hero  mb-10">
            <div className="">
                <h2 className='text-4xl text-center mb-10 font-semibold'>Log in</h2>
                <div className="card border-2 w-full  ">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered lg:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password"
                                name='password'
                                placeholder="password" className="input input-bordered lg:w-96" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='px-10 mb-4'>New to this website ? please <Link to="/Register">Register</Link>.</p>
                    <button onClick={handleGoogleSingIn} className='btn btn-accent mb-8 mx-7'>Google Log in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
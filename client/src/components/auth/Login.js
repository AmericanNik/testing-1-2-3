import React, { Fragment, useState, Redirect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleClick = () => {
    return <Redirect to='/graph' />;
  };

  return (
    <section className='landing'>
      <div>
        <div className='mainArea'>
          <div className='container landing-inner'>
            <Fragment>
              <h1 className='large text-primary'>Welcome Back!</h1>
              <p className='lead'>
                <i className='fas fa-user'></i> Log into your account
              </p>
              <form className='form' action='/graph'>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Email Address'
                    name='name'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                  />
                </div>
                <div className='form-group'></div>
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='Log In'
                  onClick={handleClick}
                />
              </form>
            </Fragment>
            <div>
              Don't have an account? <Link to='register'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

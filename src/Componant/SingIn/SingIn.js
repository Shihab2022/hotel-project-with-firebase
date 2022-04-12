import React from 'react';
import './SingIn.css'
const SingIn = () => {
    return (
        <div className="form-container">
            <h1 className="form-title">Sign In</h1>
         <form >

<div>
<label htmlFor="Enter your email">Enter your email</label> <br />
<input type="email"  required /></div>
<label htmlFor="Enter your password">Enter your password</label> <br />
<input type="password"  required />



         </form>
        </div>
    );
};

export default SingIn;
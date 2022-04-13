import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleSign = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const handleWidthGoogle = () => {
        signInWithGoogle();
      };
    return (
        <div>
                <p style={{color:'red'}}>{error?.message}</p>
               
                <p>{ loading ? 'please wait ......' : ''}</p>
            <button onClick={handleWidthGoogle} className="google-btn">
        CONTINUE WITH GOOGLE
      </button>
        </div>
    );
};

export default GoogleSign;
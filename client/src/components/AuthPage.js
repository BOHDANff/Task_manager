import React, {useState} from 'react';
import SignInForm from "./Forms/SignInForm";
import SignUpForm from "./Forms/SignUpForm";

const AuthPage = () => {
    const [signInOrUp, setSignInOrUp] = useState("in")
    return (
        <div className='authPageRoot'>
            <div style={{display:"flex", flexDirection: "column"}}>
                {signInOrUp === "in"
                ? <SignInForm setSignInOrUp={setSignInOrUp}/>
                : <SignUpForm setSignInOrUp={setSignInOrUp}/>}
            </div>
        </div>
    );
};

export default AuthPage;
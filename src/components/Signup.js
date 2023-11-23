import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';

function Signup()
{
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [mail,setMail] = useState();
    const [phone,setPhone] = useState();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {username:username,password:password,email:mail,phone:phone }
        Axios.post("https://eco-drive-hire.onrender.com/userRoute/create-user",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Account created successfully")
                navigate('/profile')
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <div className="bgImageSignup">
            <Nav/>
            <form className="form signup" onSubmit={handleSubmit}>
                <h2 className="text-light text-center p-3">Create your account</h2>
                <input className='form-control mx-auto' type='text' onChange={(event)=>setUsername(event.target.value)} placeholder='Username' required/>
                <input className='form-control mx-auto' type='password' onChange={(event)=>setPassword(event.target.value)} placeholder='Password' required/>
                <input className='form-control mx-auto' type='email' onChange={(event)=>setMail(event.target.value)} placeholder='Email' required/>
                <input className='form-control mx-auto' type='tel' onChange={(event)=>setPhone(event.target.value)} placeholder='Phone' required/>
                <div className="text-center">
                    <button className="btn btn-dark">Create</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
export default Signup;
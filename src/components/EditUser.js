import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from './UserContext';
import Axios from 'axios';
import Nav from "./Nav";
import Footer from "./Footer";

function EditUser()
{
    const { user,logout } = useContext(UserContext);
    const [username,setUsername] = useState(user.username);
    const [password,setPassword] = useState(user.password);
    const [mail,setMail] = useState(user.email);
    const [phone,setPhone] = useState(user.phone);
    const navigate = useNavigate();

    const handleCancel = ()=>{
        navigate("/profile")
    }

    const handleUpdateUser = () => {
        const data = {username:username,password:password,email:mail,phone:phone}
        Axios.put("https://eco-drive-hire.onrender.com/userRoute/update-user/"+user._id,data)
        .then((res)=>{
            if(res.status === 200){
                alert("User Profile updated successfully");
                logout();
                navigate("/profile");
            }
            else  
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return(
        <div className="text-center bgImageEdit">
            <Nav/>
            <form className="form signup" onSubmit={handleUpdateUser}>
                <h2 className="text-light text-center p-3">Create your account</h2>
                <input className='form-control mx-auto' type='text' onChange={(event)=>setUsername(event.target.value)} placeholder='Username' required defaultValue={user.username}/>
                <input className='form-control mx-auto' type='password' onChange={(event)=>setPassword(event.target.value)} placeholder='Password' required defaultValue={user.password}/>
                <input className='form-control mx-auto' type='email' onChange={(event)=>setMail(event.target.value)} placeholder='Email' required defaultValue={user.email}/>
                <input className='form-control mx-auto' type='tel' onChange={(event)=>setPhone(event.target.value)} placeholder='Phone' required defaultValue={user.phone}/>
                <div className="text-center">
                    <button className="btn btn-dark mx-3" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="btn btn-dark mx-3" type="submit">Update</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
export default EditUser;
import React,{useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Axios from 'axios';
import UserContext from './UserContext';

function Signin()
{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const navigate = useNavigate();

    const {login} = useContext(UserContext);

    const handleSignin = () => {
        Axios.post("https://eco-drive-hire.onrender.com/userRoute/login",{email,password})
        .then((res)=>{
            if(res.status === 200){
                //console.log(res.data);
                alert("Logged in Successfully");
                login(res.data);
                navigate('/profile');
            }
            else
                Promise.reject();
        })
        .catch((err)=>{
            console.error(err);
            //alert("An error occurred"+err);
            if (err.response && err.response.status === 404) {
                alert("User not found");
            } else if(err.response && err.response.status === 401){
                alert("Incorrect password")
            }
            else {
                //console.error(err);
                alert("An error occurred");
            }
        });
    }
    
    const handleLogin = () =>{
        if(password2 === '12345'){
            navigate('/admin');
        } else{
            alert('Incorrect password. Please try again.');
        }
    };

    return(
        <div className='bgImageSignin'>
            <Nav/>
            <div className="block">
                <div className="user">
                    <h2 className="title"><b>User</b></h2>
                    <form className='form user-input' onSubmit={handleSignin}>
                        <input className='input form-control mx-auto' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required/>
                        <input className='input form-control mx-auto' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required/>
                        <button type='submit' className='btn btn-primary m-4' style={{width:"80%"}}>Sign in</button>
                        <p>Dont have an account? <Link className="text-decoration-none" to="/signup">Sign up</Link> here</p>
                    </form>
                </div>
                <div className="admin">
                    <h2 className="title"><b>Admin</b></h2>
                    <div className='admin-input'>
                        <input className='input form-control mx-auto' type='password' placeholder='Password'
                         onChange={(e) => setPassword2(e.target.value)}/>
                        <button onClick={handleLogin} type='submit' className='btn btn-primary m-4' style={{width:"80%"}}>Sign in</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Signin;
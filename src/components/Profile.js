import Signin from "./Signin";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './UserContext';
import Nav from './Nav';
import Footer from './Footer';
import Axios from 'axios';

function Profile()
{
    const { user,logout } = useContext(UserContext);
    //const navigate = useNavigate();
    const deleteAccount = () => {
        Axios.delete("https://eco-drive-hire.onrender.com/userRoute/delete-user/" + user._id)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                logout();
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <div>
            {user ? (
                <div className="bgImageProfile">
                    <Nav/>
                    <div className="profile">
                        <table>
                            <tr>
                                <th colSpan={2} className="text-center">User Profile</th>
                            </tr>
                            <tr>
                                <td>Username: </td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Phone: </td>
                                <td>{user.phone}</td>
                            </tr>
                        </table>
                        <div className="profileButtons">
                            <button className="btn btn-dark" onClick={logout}>Logout</button>
                            <button className="btn btn-dark" onClick={deleteAccount}>Delete</button>
                            <Link to={"/edituser"}>
                                <button className="btn btn-dark">Edit</button>                            
                            </Link>
                        </div>
                    </div>
                    <Footer/>
                </div>
            ) : (
                <Signin />
            )}
        </div>
    )
}
export default Profile;
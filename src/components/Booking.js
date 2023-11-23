import { useParams,Link } from "react-router-dom";
import React, { useContext,useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from './UserContext';
import Nav from './Nav';
import Footer from './Footer';
import Axios from 'axios';

function Booking()
{
    const {id} = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [car,setCar] = useState({model:"",seats:"",price:"",image:""});
    const [days,setDays] = useState();
    const [location,setLocation] = useState();
    const totalCost = car.price * days;
    const [pickupDate,setPickupDate] = useState();
    const drop = new Date(pickupDate);
    let returnDate = NaN;
    if (days) {
        drop.setDate(drop.getDate() + parseInt(days));
        returnDate = drop.toLocaleDateString();
      } else {
        console.error("Days is not set or not a valid number");
      }

    useEffect(()=>{
        Axios.get("https://eco-drive-hire.onrender.com/carRoute/find-car/"+id)
        .then((res) => {
            if(res.status === 200){
                const {model,seats,price,image} = res.data;
                setCar({model,seats,price,image});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    })

    const handleRent = () => {
        const data = {userId:user._id,carId:id,pickupDate:pickupDate,rentDays:days,location:location,totalCost:totalCost}
        Axios.post("https://eco-drive-hire.onrender.com/bookingRoute/create-booking",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Booking done successfully");
                navigate("/history");                
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <div>
            {user ? (
                <div  className="bgImageBHistory">
                    <Nav/>
                    <div className="profile">
                        <table>
                            <tr>
                                <th colSpan={2} className="text-center">Booking Confirmation</th>
                            </tr>
                            <tr>
                                <td>Username: </td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td>Model name:</td>
                                <td>{car.model}</td>
                            </tr>
                            <tr>
                                <td>No.of seats:</td>
                                <td>{car.seats}</td>
                            </tr>
                            <tr>
                                <td>Price of rent per day:</td>
                                <td>{car.price}</td>
                            </tr>
                        </table>
                        <form className="bookingForm text-center" onSubmit={handleRent}>
                            <input className="form-control" onChange={(e)=>{setPickupDate(e.target.value)}} type="date" placeholder="Pick up date" required/>
                            <input className="form-control" onChange={(e)=>{setDays(e.target.value)}} type="number" placeholder="No.of days to rent" required/>
                            <input className="form-control" onChange={(e)=>{setLocation(e.target.value)}} type="text" placeholder="Pick up location (Cities in AP)" required/>
                            <p>Total cost: {totalCost}</p>
                            <p>Return Date: {returnDate}</p>
                            <button className="btn btn-dark">Rent</button>
                        </form>
                    </div>
                    <Footer/>
                </div>
            ) : (
                <div>
                    <Nav/>
                    <div className="text-center">
                        <h1>Oops! It seems you are not Signed in</h1>
                        <h3><Link to={"/profile"} className="text-decoration-none">Signin</Link> to continue further</h3>
                    </div>
                    <Footer/>
                </div>
            )}
        </div>
    )
}
export default Booking;
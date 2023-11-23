import { useEffect, useState } from "react";
import Axios from 'axios';

function BookingCard(props)
{
    const [carId,pickupDate,rentDays,location,totalCost] = props.obj;
    let pickUp = new Date(pickupDate);
    pickUp = pickUp.toLocaleDateString();
    let drop = new Date(pickupDate);
    drop.setDate(drop.getDate() + parseInt(rentDays));
    const dropDate = drop.toLocaleDateString();
    const [arr,setArr] = useState([]);

    useEffect(()=>{
        Axios.get("https://eco-drive-hire.onrender.com/carRoute/find-car/"+carId)
        .then((res)=>{
            if(res.status === 200){
                setArr(res.data);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[carId])

    return(
        <div className="profile">
            <table>
                <tr>
                    <th>Car details</th>
                </tr>
                <tr>
                    <td>Model name:</td>
                    <td>{arr ? arr.model : 'Not found'}</td>
                </tr>
                <tr>
                    <td>Number of seats:</td>
                    <td>{arr ? arr.seats : 'Not found'}</td>
                </tr>
                <tr>
                    <th>Order details</th>
                </tr>
                <tr>
                    <td>Pick up date: </td>
                    <td>{pickUp}</td>
                </tr>
                <tr>
                    <td>Return date: </td>
                    <td>{dropDate}</td>
                </tr>
                <tr>
                    <td>Number of days rented: </td>
                    <td>{rentDays}</td>
                </tr>
                <tr>
                    <td>Pick up location: </td>
                    <td>{location}</td>
                </tr>
                <tr>
                    <td>Total cost: </td>
                    <td>{totalCost}/-</td>
                </tr>
            </table>
        </div>
    )
}
export default BookingCard;
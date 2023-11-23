import Nav2 from './Nav2';
import Footer2 from './Footer2';
import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import BookingCard2 from './BookingCard2';

function History2()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://eco-drive-hire.onrender.com/bookingRoute")
        .then((res)=>{
            if(res.status === 200){
                setArr(res.data);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])

    const ListBookings2 = () => {
        return arr.map((val,ind)=>{
            return <BookingCard2 key={ind} obj={[val.userId,val.carId,val.pickupDate,val.rentDays,val.location,val.totalCost]}/>
        })
    }
    return(
        <div>
            <Nav2/>
            <div className="container">
                {ListBookings2()}
            </div>
            <Footer2/>
        </div>
    )
}
export default History2;
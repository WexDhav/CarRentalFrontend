import Nav from './Nav';
import Footer from './Footer';
import React, { useContext, useState,useEffect } from 'react';
import UserContext from './UserContext';
import Axios from 'axios';
import BookingCard from './BookingCard';

function History()
{
    const {user} = useContext(UserContext);
    const [arr,setArr] = useState([]);
    useEffect(() => {
        if (user && user._id) {
            Axios.get("https://eco-drive-hire.onrender.com/bookingRoute/"+user._id)
                .then((res) => {
                    if (res.status === 200) {
                        setArr(res.data);
                        console.log(res.data)
                    } else {
                        Promise.reject();
                    }
                })
                .catch((err) => alert(err));
        }
    }, [user]);

    const ListBookings = () => {
        return arr.map((val,ind)=>{
            return <BookingCard key={ind} obj={[val.carId,val.pickupDate,val.rentDays,val.location,val.totalCost]}/>
        })
    }
    return(
        <div  className="bgImageBHistory">
            {user ? (
                <div>
                    <Nav/>
                    <h1 className="text-center">Booking History</h1>
                    <div>
                        {arr.length === 0 ? (
                            <h1 className="m-5 text-center">You currently have no booking history</h1>
                        ):(
                            <div className="container">
                                {ListBookings()}
                            </div>
                        )}
                    </div>
                    <Footer/>
                </div>
            ) : (
                <div>
                    <Nav/>
                    <div>
                        <h1 className="m-5 text-center">Sign in to access this page</h1>
                    </div>
                    <Footer/>
                </div>
            )}
        </div>
    )
}
export default History;
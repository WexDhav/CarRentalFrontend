import { useEffect,useState } from 'react';
import Axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';
import Car from './CarCard';

function Cars()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://eco-drive-hire.onrender.com/carRoute")
        .then((res)=>{
            if(res.status === 200){
                setArr(res.data);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])

    const ListCar = () => {
        return arr.map((val,ind)=>{
            return <Car key={ind} obj={[val._id,val.model,val.seats,val.price,val.image]}/>
        })
    }
    return(
        <div>
            <Nav/>
            <h1 className="text-center">All Available Cars</h1>
            <div class="container">
                {ListCar()}
            </div>
            <Footer/>
        </div>
    )
}
export default Cars;
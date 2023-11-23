import { useEffect,useState } from 'react';
import Axios from 'axios';
import Nav2 from './Nav2';
import Footer2 from './Footer2';
import Car2 from './CarCard2';

function Cars2()
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
            return <Car2 key={ind} obj={[val._id,val.model,val.seats,val.price,val.image]}/>
        })
    }
    return(
        <div>
            <Nav2/>
            <h1 className="text-center">All Available Cars</h1>
            <div class="container">
                {ListCar()}
            </div>
            <Footer2/>
        </div>
    )
}
export default Cars2;
import { useEffect,useState } from 'react';
import Axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';
import Car from './CarCard';

function Search2()
{
    const [price1,setPrice1] = useState();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [arr,setArr] = useState();
    useEffect(()=>{
        if(formSubmitted){
            Axios.get("https://eco-drive-hire.onrender.com/carRoute/find-car-byprice/"+price1)
            .then((res)=>{
                if(res.status === 200){
                    setArr(res.data);
                }
                else
                    Promise.reject();
            })
            .catch((err)=>alert(err))
            .finally(() => {
                setFormSubmitted(false); // Reset formSubmitted after API call is completed
            });
        }
    },[formSubmitted,price1])

    const handleCompany = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    }

    const ListCar = () => {
        if (!arr || arr.length === 0) {
            return <p></p>;
        }

        return arr.map((val,ind)=>{
            return <Car key={ind} obj={[val._id,val.model,val.seats,val.price,val.image]}/>
        })
    }

    return(
        <div>
            <Nav/>
            <div className="search1">
                <form onSubmit={handleCompany}>
                <select className="form-control" onChange={(event)=>{setPrice1(event.target.value)}} required>
                    <option>Select Price</option>
                    <option>1499</option>
                    <option>2999</option>
                    <option>4499</option>
                </select>
                    <button className="btn btn-dark">Filter</button>
                </form>
            </div>
            <div class="container">
                {ListCar()}
            </div>
            <Footer/>
        </div>
    )
}
export default Search2;
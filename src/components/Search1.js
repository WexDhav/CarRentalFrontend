import { useEffect,useState } from 'react';
import Axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';
import Car from './CarCard';

function Search()
{
    const [company,setCompany] = useState();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [arr,setArr] = useState();
    useEffect(()=>{
        if(formSubmitted){
            Axios.get("https://eco-drive-hire.onrender.com/carRoute/find-car-bycompany/"+company)
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
    },[formSubmitted,company])

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
                    <select className="form-control" onChange={(event)=>{setCompany(event.target.value)}} required>
                        <option>Select Car Company</option>
                        <option>Tata</option>
                        <option>Hyundai</option>
                        <option>Mahindra</option>
                        <option>Maruti Suzuki</option>
                        <option>Toyota</option>
                        <option>Kia</option>
                        <option>MG</option>
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
export default Search;
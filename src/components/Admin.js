//import {Link} from 'react-router-dom';
import {useState} from 'react';
import Axios from 'axios';
import Nav2 from './Nav2';
import Footer2 from './Footer2';

function Admin()
{
    const [company,setCompany] = useState();
    const [model,setModel] = useState();
    const [seats,setSeats] = useState();
    const [price,setPrice] = useState();
    const [image,setImage] = useState();

    const handleSubmit = () => {
        const data = {company:company,model:model,seats:seats,price:price,image:image}
        Axios.post("https://eco-drive-hire.onrender.com/carRoute/create-car",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Car added successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        //console.log(data);
    }
    return(
        <div className='bgImageAdmin'>
            <Nav2/>
            <form className="adminform" onSubmit={handleSubmit}>
                <h2 className="text-light">Upload a car</h2>
                <select className="form-control" onChange={(event)=>{setCompany(event.target.value)}}>
                    <option>Select Car Company</option>
                    <option>Tata</option>
                    <option>Hyundai</option>
                    <option>Mahindra</option>
                    <option>Maruti Suzuki</option>
                    <option>Toyota</option>
                    <option>Kia</option>
                    <option>MG</option>
                </select>   
                <input className="form-control" onChange={(event)=>{setModel(event.target.value)}} type="text" placeholder="Model"/>         
                <input className="form-control" onChange={(event)=>{setSeats(event.target.value)}} type="number" placeholder="No.of seats"/>
                <select className="form-control" onChange={(event)=>{setPrice(event.target.value)}}>
                    <option>Select Price</option>
                    <option>1499</option>
                    <option>2999</option>
                    <option>4499</option>
                </select>  
                <input className="form-control" onChange={(event)=>{setImage(event.target.value)}} type="url" placeholder="Image url"/>
                <button className="btn btn-dark" type="submit">Upload</button>
            </form>
            <Footer2/>
        </div>
    )
}
export default Admin;
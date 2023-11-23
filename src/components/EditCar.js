import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Axios from 'axios';
import Nav2 from "./Nav2";
import Footer2 from "./Footer2";

function EditCar()
{
    const {id} = useParams();
    const [company,setCompany] = useState();
    const [model,setModel] = useState();
    const [seats,setSeats] = useState();
    const [price,setPrice] = useState();
    const [image,setImage] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        Axios.get("https://eco-drive-hire.onrender.com/carRoute/find-car/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {company,model,seats,price,image} = res.data;
                //console.log(res.data);
                setCompany(company);
                setModel(model);
                setSeats(seats);
                setPrice(price);
                setImage(image);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[id])

    const handleCancel = ()=>{
        navigate("/cars2")
    }

    const handleUpdateCar = () => {
        const newData = {company:company,model:model,seats:seats,price:price,image:image}
        Axios.put("https://eco-drive-hire.onrender.com/carRoute/update-car/"+id,newData)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully");
                navigate("/cars2");
            }
            else  
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return(
        <div className="bgImageEdit">
            <Nav2/>
            <form className="adminform" onSubmit={handleUpdateCar}>
                <h2 className="text-light">Update a Car</h2>
                <select className="form-control" onChange={(event)=>{setCompany(event.target.value)}} value={company}>
                    <option>Select Car Company</option>
                    <option>Tata</option>
                    <option>Hyundai</option>
                    <option>Mahindra</option>
                    <option>Maruti Suzuki</option>
                    <option>Toyota</option>
                    <option>Kia</option>
                    <option>MG</option>
                </select>   
                <input className="form-control" onChange={(event)=>{setModel(event.target.value)}} type="text" placeholder="Model" defaultValue={model}/>         
                <input className="form-control" onChange={(event)=>{setSeats(event.target.value)}} type="number" placeholder="No.of seats" defaultValue={seats}/>
                <select className="form-control" onChange={(event)=>{setPrice(event.target.value)}} value={price}>
                    <option>Select Price</option>
                    <option>1499</option>
                    <option>2999</option>
                    <option>4499</option>
                </select>  
                <input className="form-control" onChange={(event)=>{setImage(event.target.value)}} type="url" placeholder="Image url" value={image}/>
                <button className="btn btn-dark mx-3" onClick={handleCancel} type="button">Cancel</button>
                <button className="btn btn-dark mx-3" type="submit">Update</button>
            </form>
            <Footer2/>
        </div>
    )
}
export default EditCar;
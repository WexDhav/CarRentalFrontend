import {Link} from 'react-router-dom';
import Axios from 'axios';
function CarCard(props)
{
    const [_id,model,seats,price,image] = props.obj;

    const handleDelete = () => {
        Axios.delete("https://eco-drive-hire.onrender.com/carRoute/delete-car/" + _id)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <div class="flexbox2">
            <div class="text2">
                <h1>{model}</h1>
                <p>Price per day: {price}/-<br/>{seats} seater</p>
                <Link to={"/editcar/"+_id}>
                    <button className="btn btn-dark">Edit</button>                    
                </Link>
                <button onClick={handleDelete} className="btn btn-dark">Delete</button>
            </div>
            <div class="image2">
                <img src={image} alt="car"/>
            </div>
        </div>
    )
}

export default CarCard;
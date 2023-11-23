import {Link} from 'react-router-dom';

function CarCard(props)
{
    const [_id,model,seats,price,image] = props.obj;

    return(
        <div class="flexbox">
            <div class="text">
                <h1>{model}</h1>
                <p>Price per day: {price}/-<br/>{seats} seater</p>
                <Link to={"/booking/"+_id}>
                    <button className="btn btn-dark">Rent car</button>                    
                </Link>
            </div>
            <div class="image">
                <img src={image} alt="Sample car 1"/>
            </div>
        </div>
    )
}

export default CarCard;
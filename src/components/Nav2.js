import {Link} from 'react-router-dom';
function Nav2()
{
    const myStyle = {
        marginLeft: "100px",
        fontFamily: "Orbitron",
    }
    return(
        <nav className="navbar bg-dark">
            <Link className="navbar-brand text-light" style={myStyle} to="/admin"><h2>EcoDrive Hire</h2></Link>
            <div className="nav" style={{marginRight:"100px"}}>
                <Link className="nav-link text-light" to="/cars2">Cars</Link>
                <Link className="nav-link text-light" to="/history2">Booking History</Link>
                <Link className="nav-link text-light" to="/register">Log Out</Link>
            </div>
        </nav>
    )
}
export default Nav2;
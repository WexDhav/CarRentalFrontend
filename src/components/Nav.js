import {Link} from 'react-router-dom';
function Nav()
{
    const myStyle = {
        marginLeft: "100px",
        fontFamily: "Orbitron",
    }
    return(
        <nav className="navbar bg-dark">
            <Link className="navbar-brand text-light" style={myStyle} to="/register"><h1>EcoDrive Hire</h1></Link>
            <div className="nav" style={{marginRight:"100px"}}>
                <Link className="nav-link text-light" to="/cars">Cars</Link>
                <Link className="nav-link text-light" to="/history">Booking History</Link>
                <Link className="nav-link text-light" to="/profile">Profile</Link>
            </div>
        </nav>
    )
}
export default Nav;
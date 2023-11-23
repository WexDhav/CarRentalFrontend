import {Link} from 'react-router-dom';

function Footer()
{
    return(
        <footer className="text-center p-5 bg-dark">
            <Link className="text-decoration-none text-light m-3" to="/about">About</Link>
            <Link className="text-decoration-none text-light m-3" to="/travel">Travel Resources</Link>
            <Link className="text-decoration-none text-light m-3" to="/faq">FAQs</Link>
            <Link className="text-decoration-none text-light m-3" to="/contact">Contact</Link>
            <hr className="text-light"/>
            <p className="text-light">&copy; 2023 Car Rental Service</p>
        </footer>
    )
}
export default Footer;
import { Link } from 'react-router-dom';
import './Header.scss';
import Image from '../../../components/Image/Images';
import logo from '../../../assets/images/aa38384d3942a55696d8070552aed2f4c190fc14.jpg';

function Header() {
    return (
        <header className="navbar">
            <div className="logo-wrapper">
                <Image src={logo} alt="logo" className="lemon-logo" />
            </div>
            <nav className="menu">
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">About</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">Menu</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">Reservations</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/booking">Booking table</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

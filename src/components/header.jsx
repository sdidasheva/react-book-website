import '../styles/header.css';
import logo from '../images/logo.png';
import Navigation from './navigation';
import MobileNavigation from './mobile_navigation';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Main from "../pages/main";
import BookList from "../pages/booklist";

export default function Header() {
    return (
        <Router>
            <header className='header'>
                <div className='wrapper_header'>
                    <Link to="/"><img className='header_logo' src={logo} alt="logo" /></Link>
                    <Navigation />
                    <MobileNavigation />
                </div>
            </header>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/list" element={<BookList />} />
            </Routes>
        </Router>
    )
}


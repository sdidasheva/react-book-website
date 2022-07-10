import {
    Link
} from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="desk_nav">
            <ul className="desk_nav_list">
                <li><Link className="link" to="/">Главная</Link></li>
                <li><Link className="link" to="/list">Прочитанное</Link></li>
            </ul>
        </nav>
    )
}
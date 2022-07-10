import '../styles/about.css';
import { BsArrowRight } from 'react-icons/bs';

export default function About() {
    return (
        <div className="about">
            <div className='about_wrapper'>
                <h1 className="about_text">Читайте и слушайте книги на любом устройстве в любой точке мира</h1>
                <button className="about_btn">Перейти в каталог &nbsp; <BsArrowRight /> </button>
            </div>
        </div>
    )
}
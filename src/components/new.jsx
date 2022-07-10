import '../styles/new.css';
import ButtonSeeAll from './btn_seeAll';
import newbooks from '../json/newBooks.json'
import NewBook from './newBook';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';



export default function New() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='new'>
            <div className='new_wrapper'>
                <h1 className='new_title'>
                    Новинки
                </h1>
                <div className='new_btn'><ButtonSeeAll /></div>
                <div className='new_books'>
                    <Slider {...settings}>
                        {newbooks && newbooks.map((newbook, index) => {
                            return (
                                <div className='new_book' key={index}>
                                    <NewBook image={newbook.image} title={newbook.title} author={newbook.author} year={newbook.year} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
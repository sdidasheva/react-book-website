import '../styles/popular.css';
import ButtonSeeAll from './btn_seeAll';
import books from '../json/popularBooks.json'
import PopularBook from './popularBook';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';



export default function Popular() {
    const settings = {
        dots: true,
        infinite: true,
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
        <div className='popular'>
            <div className='popular_wrapper'>
                <h1 className='popular_title'>
                    Популярное
                </h1>
                <div className='popular_btn'><ButtonSeeAll /></div>
                <div className='popular_books'>
                    <Slider {...settings}>
                        {books && books.map((book, index) => {
                            return (
                                <div className='popular_book' key={index}>
                                    <PopularBook image={book.image} title={book.title} author={book.author} year={book.year} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
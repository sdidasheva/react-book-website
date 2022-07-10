import '../styles/categories.css';
import classic from '../images/categories1.png';
import kids from '../images/categories2.png';
import fiction from '../images/categories3.png';
import inartistic from '../images/categories4.png';
import comics from '../images/categories5.png';
import business from '../images/categories6.png';
import ButtonSeeAll from './btn_seeAll';

export default function Categories() {
    return (
        <div className='categories'>
            <div className='categories_wrapper'>
                <h1 className='categories_title'>
                    Категории
                </h1>
                <div className='categories_images'>
                    <div className='image_container'>
                        <img className='image-block' src={classic} alt='classic' />
                        <div className='overlay'>Художественная литература</div>
                    </div>
                    <div className='image-block two_images'>
                        <div className='image_container container_kids'>
                            <img className='block-image' src={kids} alt='kids' />
                            <div className='overlay'>Детская литература</div>
                        </div>
                        <div className='image_container'>
                            <img className='images_fiction block-image' src={fiction} alt='fiction' />
                            <div className='overlay'>Фантастика</div>
                        </div>
                    </div>
                    <div className='image-block two_images'>
                        <div className='image_container container_inartistic'>
                            <img className='block-image' src={inartistic} alt='inartistic' />
                            <div className='overlay overlay_inartistic'>Нехудожественная литература</div>
                        </div>
                        <div className='image_container'>
                            <img className='images_comics block-image' src={comics} alt='comics' />
                            <div className='overlay'>Комиксы</div>
                        </div>
                    </div>
                    <div className='image_container'>
                        <img className='images_business image-block' src={business} alt='business' />
                        <div className='overlay'>Бизнес-литература</div>
                    </div>

                </div>
                <div className='categories_btn'><ButtonSeeAll /></div>
            </div>
        </div>
    )
}
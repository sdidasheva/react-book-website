import '../styles/footer.css';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { RiTwitterLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiYoutubeLine } from 'react-icons/ri';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className='footer_left'>
                    <div className="footer_title">
                        <p className="title_contacts">Контакты</p>
                        <p className="title_payment">Оплата</p>

                    </div>
                    <hr />
                    <div className="footer_info">
                        <ul className='info_contacts'>
                            <li>Каталог</li>
                            <li>Вход</li>
                            <li>Популярное</li>
                            <li>Новинки</li>
                            <li>Моя библиотека</li>
                        </ul>
                        <ul className='info_payment'>
                            <li>Как оформить подписку</li>
                            <li>Возврат денежных средств</li>
                        </ul>
                    </div>
                </div>
                <div className='footer_right'>
                    <p className="title_subscribe">Подписка на новости</p>
                    <hr />
                    <div className='footer_subscribe'>
                        <div className='subscribe_form'>
                            <input className='form_email' type="text" placeholder='E-mail' />
                            <button className="btn_subscribe">Подписаться</button>
                        </div>
                        <div className='subscribe_social'>
                            <p className='social_text'>Следите за акциями и новостями</p>
                            <ul className='social_items'>
                                <li><RiFacebookBoxLine /></li>
                                <li><RiTwitterLine /></li>
                                <li><RiInstagramLine /></li>
                                <li><RiYoutubeLine /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
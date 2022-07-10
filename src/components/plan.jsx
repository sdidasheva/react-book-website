import '../styles/plan.css';
import ButtonStart from './btn_start';
import free from '../images/plan1.png';
import month from '../images/plan2.png';
import year from '../images/plan3.png';

export default function TariffPlan() {
    return (
        <div className="tariff">
            <div className="tariff_wrapper">
                <h1 className='tariff_title'>
                    Тарифные планы
                </h1>
                <div className='tariff_free'>
                    <div className='free_action'>
                        <p className='free-action_text'>Читайте и сушайте первые 30 дней бесплатно</p>
                        <div className='free-action_btn'><ButtonStart /></div>
                    </div>
                    <div className='free_info'>
                        <img className='free-info_image' src={free} alt="free" />
                        <p className='free-info_text'>Читайте и слушайте любимые книги дома и в дороге даже без интернета</p>
                    </div>
                </div>
                <div className='tariff_month'>
                    <div className='month_info'>
                        <img className='month-info_image' src={month} alt="month" />
                        <p className='month-info_text'>Делайте любые пометки, сохраняйте закладки в любимых книгах</p>
                    </div>
                    <div className='month_action'>
                        <p className='month-action_text'>Последущие месяцы</p>
                        <p className='month-action_price'>6 P</p>
                        <div className='month-action_btn'><ButtonStart /></div>
                    </div>
                </div>
                <div className='tariff_year'>
                    <div className='year_action'>
                        <p className='year-action_text'>Выгодная подписка на год</p>
                        <p className='year-action_price'>45 P</p>
                        <div className='year-action_btn'><ButtonStart /></div>
                    </div>
                    <div className='year_info'>
                        <img className='year-info_image' src={year} alt="year" />
                        <p className='year-info_text'>Каждый день мы рекоммендуем хорошие книги</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
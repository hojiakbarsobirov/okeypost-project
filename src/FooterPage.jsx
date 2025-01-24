import React from 'react'
import Logotip from '../public/logotip.png'
import FooterIcons from '../public/footer-icons.png'

const FooterPage = () => {
    return (
        <>
            <section className=' w-full h-auto py-20 flex flex-wrap justify-center items-center gap-10 space-x-10'>

                <header className=' w-[250px] h-[300px] flex justify-start items-start flex-col space-y-5 p-5'>
                    <img className='w-[70%]' src={Logotip} alt="" />
                    <img className='w-[6 0%]' src={FooterIcons} alt="" />
                </header>

                <header className=' w-[250px] h-[300px] flex justify-start items-start flex-col space-y-1'>
                    <h2 className='font-medium mb-3'>О компании</h2>
                    <p className='text-gray-600 '>Услуги</p>
                    <p className='text-gray-600 '>Цены</p>
                    <p className='text-gray-600 '>Отзывы</p>
                    <p className='text-gray-600 '>Контакты</p>
                    <p className='text-gray-600 '>Вакансии</p>
                    <p className='text-gray-600 '>Соглашение о персональных данных</p>
                    <p className='text-gray-600 '>Условия использования</p>
                </header>

                <header className=' w-[250px] h-[300px] flex justify-start items-start flex-col space-y-1'>
                    <h2 className='font-medium mb-3'>Полезное</h2>
                    <p className='text-gray-600'>Как работает наш сервис</p>
                    <p className='text-gray-600'>Как покупать с оператором</p>
                    <p className='text-gray-600'>Ответы на частые вопросы</p>
                    <p className='text-gray-600'>Популярные магазины</p>
                    <p className='text-gray-600'>Черный список магазинов</p>
                    <p className='text-gray-600'>Актуальные распродажи</p>
                </header>

                <header className=' w-[250px] h-[300px] flex justify-start items-start flex-col space-y-1'>
                    <h2 className='font-medium mb-3'>Спецпроекты</h2>
                    <p className='text-gray-600'>50% на первую доставку</p>
                    <p className='text-gray-600'>Скидки для постоянных клиентов</p>
                    <p className='text-gray-600'>Реферальная программа</p>
                    <p className='text-gray-600'>Кэшбек Mr. Rebates и Rakuten</p>
                    <p className='text-gray-600'>Stop Fraud</p>
                </header>
            </section>

            <section className=' w-full h-16 flex justify-center items-center'>
                <div className=' w-[85%] h-full border-t-2 flex justify-center items-center'>
                    <p className='text-gray-400 text-sm'>© 2021 Okeypost . Все права защищены.</p>
                </div>
            </section>
        </>
    )
}

export default FooterPage
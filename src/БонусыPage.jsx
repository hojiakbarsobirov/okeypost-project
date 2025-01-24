import React from 'react'
import Img1 from '../public/bonus-page-img1.png'
import Img2 from '../public/bonus-page-img2.png'
import Img3 from '../public/bonus-page-img3.png'
import Img4 from '../public/bonus-page-img4.png'
import Img5 from '../public/bonus-page-img5.png'
import BannerImg from '../public/bonus-page-banner-img.png'

const БонусыPage = () => {
    return (
        <>
            <section className='mb-8 w-full h-auto flex justify-center items-start pt-28'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-[40vh] bg-cover bg-center rounded-xl flex justify-center items-center'>
                    <div className=' w-[87%] h-full flex justify-evenly items-start flex-col'>
                        <p className='text-sm text-gray-300'>Главная  /  Бонусы и партнёрская программа</p>
                        <h2 className='font-bold text-white text-4xl'>Бонусы и партнёрская программа</h2>
                        <h2 className='text-white font-bold text-2xl'>Платим $3 с каждой отправленной посылки</h2>
                        <button className='bg-green-500 px-4 py-3 text-white rounded-full'>Начать зарабатывать</button>
                    </div>
                </div>
            </section>

            <div className=' w-full h-20 flex justify-center items-center '>
                <div className='w-[80%] h-full flex justify-start items-end'>
                    <h2 className='font-bold w-full h-1 text-3xl'>Зарабатывать с нами — проще простого:</h2>
                </div>
            </div>

            <section className='w-full h-auto flex justify-center items-center pl-10 py-20'>
                <header className=' w-[85%] h-full flex flex-wrap justify-start items-center gap-10'>

                    <div className='shadow-md w-[46%] h-[250px] rounded-lg flex justify-center items-start flex-col gap-6 px-4'>
                        <img src={Img1} alt="" />
                        <h2 className='font-bold'>Дарим скидку 10% вашим друзьям и подписчикам</h2>
                        <p className='w-[75%]'>На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.</p>
                    </div>

                    <div className='shadow-md w-[46%] h-[250px] rounded-lg flex justify-center items-start flex-col gap-6 px-4'>
                        <img src={Img2} alt="" />
                        <h2 className='font-bold'>Платим по £3 за отправленную посылку </h2>
                        <p className='w-[90%]'>Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.</p>
                    </div>

                    <div className='shadow-md w-[46%] h-[250px] rounded-lg flex justify-center items-start flex-col gap-6 px-4'>
                        <img src={Img3} alt="" />
                        <h2 className='font-bold'>Промо на любой вкус</h2>
                        <p className='w-[90%]'>Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.</p>
                    </div>

                    <div className='shadow-md w-[46%] h-[250px] rounded-lg flex justify-center items-start flex-col gap-6 px-4'>
                        <img src={Img4} alt="" />
                        <h2 className='font-bold'>Выплаты по запросу</h2>
                        <p className='w-[90%]'>Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.</p>
                    </div>

                    <div className='shadow-md w-[46%] h-[250px] rounded-lg flex justify-center items-start flex-col gap-6 px-4'>
                        <img src={Img5} alt="" />
                        <h2 className='font-bold'>Начисляем кэшбэк £1 на 1 посылку</h2>
                        <p className='w-[90%]'>За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов </p>
                    </div>

                </header>
            </section>

            <section className='w-full h-auto py-14 flex justify-center items-center'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto rounded-2xl bg-cover bg-center flex justify-evenly items-center'>

                    <div className='flex justify-center items-center w-[35%] h-full p-6'>
                        <img className='w-[300px]' src={BannerImg} alt="" />
                    </div>

                    <div className=' w-[50%] h-full flex justify-evenly space-y-6 items-start flex-col p-2'>
                        <h2 className='text-3xl w-[75%] font-bold text-white'>Готовы начать зарабатывать вместе с нами?</h2>
                        <p className='text-gray-300'>Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!</p>
                        <button className='bg-green-500 text-white px-4 py-3 rounded-full'>Присоедениться</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default БонусыPage
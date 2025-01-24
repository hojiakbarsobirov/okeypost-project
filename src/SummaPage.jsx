import React from 'react'
import Img1 from '../public/summa-page-img1.png'
import Img2 from '../public/summa-page-img2.png'
import Img3 from '../public/summa-page-img3.png'
import Img4 from '../public/summa-page-img4.png'
import Logotip1 from './../public/logotip1.png'
import Logotip2 from './../public/logotip2.png'
import Logotip3 from './../public/logotip3.png'
import SelectIcons from '../public/select-icons.png'

const SummaPage = () => {
    return (
        <>
            <section className='mb-10 w-full h-auto flex justify-center items-center pt-28'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto py-10 bg-cover bg-center rounded-xl flex justify-center items-center'>
                    <div className=' w-[87%] h-full flex justify-center space-y-10 items-start flex-col'>
                        <p className='text-sm text-gray-300'>Главная  /  Цены</p>
                        <h2 className='text-4xl font-bold text-white'>Услуги доставки из Великобритании</h2>
                    </div>
                </div>
            </section>

            <section className='mb-10 w-full h-auto py-10 flex flex-wrap justify-center items-center gap-14'>

                <div className=' w-[270px] h-[430px] p-2 flex justify-start items-center flex-col'>
                    <img className='h-[55%] mb-4' src={Img1} alt="" />
                    <h2 className='font-bold mb-4'>Ваш личный адрес для покупок</h2>
                    <p className='mb-4'>на нашем современном автоматизированном складе в безналоговом Делавэре</p>
                    <div className='w-full'>
                        <button className='bg-blue-400 px-6 py-2 text-white rounded-md'>Бесплатно</button>
                    </div>
                </div>

                <div className=' w-[270px] h-[430px] p-2 flex justify-start items-center flex-col'>
                    <img className='h-[55%] mb-3' src={Img2} alt="" />
                    <h2 className='font-bold mb-2'>Объединение нескольких посылок в одну</h2>
                    <p className='mb-2'>ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной</p>
                    <div className='w-full'>
                        <button className='bg-blue-400 px-6 py-2 text-white rounded-md'>от £10.00</button>
                    </div>
                </div>

                <div className=' w-[270px] h-[430px] p-2 flex justify-start items-center flex-col'>
                    <img className='h-[55%] mb-3' src={Img3} alt="" />
                    <h2 className='font-bold mb-5'>Усиленная упаковка по запросу</h2>
                    <p className='mb-4'>Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.</p>
                    <div className='w-full'>
                        <button className='bg-blue-400 px-6 py-2 text-white rounded-md'>от £0.25</button>
                    </div>
                </div>

                <div className=' w-[270px] h-[430px] p-2 flex justify-start items-center flex-col'>
                    <img className='h-[55%] mb-2' src={Img4} alt="" />
                    <h2 className='font-bold mb-2'>Хранение входящих посылок 30 дней</h2>
                    <p className='mb-2'>чем больше срок хранения посылок на складе – тем больше вы сможете собрать</p>
                    <div className='w-full'>
                        <button className='bg-blue-400 px-6 py-2 text-white rounded-md'>Бесплатно</button>
                    </div>
                </div>

            </section>

            <section className='w-full h-auto py-5 flex justify-center items-center'>
                <div className='w-[82%] h-full flex justify-center items-start flex-col space-y-5'>
                    <h2 className='font-bold text-4xl w-[40%]'>Онлайн-калькулятор
                        стоимости доставки товара</h2>
                    <p className='w-[50%]'>Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</p>
                </div>
            </section>

            <section className=' w-full h-auto flex justify-center items-center py-10'>
                <header className='shadow-md rounded-xl w-[82%] px-5 h-full py-5 flex flex-wrap justify-between items-center gap-4'>

                    <div className=' w-[220px] h-[120px] flex justify-around items-start flex-col'>
                        <h2 className='font-bold'>Страна:</h2>
                        <select className='w-full h-10 text-gray-400 border-b-[1px] border-black px-2' name="" id="">
                            <option value="1">Russia</option>
                        </select>
                    </div>

                    <div className='w-[220px] h-[120px] flex flex-wrap justify-around items-start flex-col'>
                        <h2 className='font-bold'>Город:</h2>
                        <input className='w-full h-10 border-b-[1px] border-black focus:outline-none pl-4' placeholder='Москва' type="text" />
                    </div>

                    <div className='w-[220px] h-[120px] flex flex-wrap justify-around items-start flex-col'>
                        <h2 className='font-bold'>Индекс:</h2>
                        <input className='w-full h-10 border-b-[1px] border-black focus:outline-none pl-4' placeholder='Введите индекс' type="text" />
                    </div>

                    <div className='w-[220px] h-[120px] flex flex-wrap justify-around items-start flex-col'>
                        <h2 className='font-bold'>Вес посылки:</h2>
                        <input className='w-full h-10 border-b-[1px] border-black focus:outline-none pl-4' placeholder='0,5' type="text" />
                    </div>

                    <div className='w-[220px] h-[120px] flex flex-wrap justify-around items-start flex-col'>
                        <h2 className='font-bold'>Дополнительные услуги:</h2>
                        <input className='w-full h-10 border-b-[1px] border-black focus:outline-none pl-4' placeholder='Выберите услуги' type="text" />
                    </div>

                    <button className='w-[250px] h-14 bg-green-500 rounded-full text-white font-medium'>Рассчитать</button>
                </header>
            </section>

            <section className=' w-full h-auto py-5 mb-20'>
                <div className='mb-10 w-full h-auto py-5 flex justify-center items-center'>
                    <div className='w-[82%] h-full  flex justify-start items-center'>
                        <h2 className='font-bold text-3xl'>Варианты доставки:</h2>
                    </div>
                </div>

                <header className='mb-10 w-full h-auto space-y-10 flex justify-around items-center flex-col'>

                    <div className='shadow-md rounded-xl w-[82%] py-5 flex flex-wrap items-center'>
                        <div className=' w-24 h-full flex justify-center items-center'>
                            <img src={Logotip1} alt="" />
                        </div>

                        <div className=' w-[47%] h-[80%] border-r-[1px] border-gray-300 flex justify-start items-center pl-4'>
                            <h2 className='font-medium'>Почта России</h2>
                        </div>

                        <div className=' w-[14%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Сроки:</p>
                                <h2 className='font-medium'>10-14 дней</h2>
                            </div>
                        </div>

                        <div className=' w-[15%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Стоимость доставки:</p>
                                <h2 className='font-medium'>от £27.00</h2>
                            </div>
                        </div>

                        <div className=' w-[11%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Итого:</p>
                                <h2 className='font-medium'>£41.99</h2>
                            </div>
                        </div>

                        <div className='w-[5%] h-[80%] flex justify-center items-center'>
                            <img src={SelectIcons} alt="" />
                        </div>
                    </div>

                    <div className='shadow-md rounded-xl w-[82%] h-auto py-5 flex items-center'>
                        <div className=' w-24 h-full flex justify-center items-center'>
                            <img src={Logotip2} alt="" />
                        </div>

                        <div className=' w-[47%] h-[80%] border-r-[1px] border-gray-300 flex justify-start items-center pl-4'>
                            <h2 className='font-medium'>EMS ПОЧТА РОССИЯ</h2>
                        </div>

                        <div className=' w-[14%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Сроки:</p>
                                <h2 className='font-medium'>9-12 дней</h2>
                            </div>
                        </div>

                        <div className=' w-[15%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Стоимость доставки:</p>
                                <h2 className='font-medium'>от £40.00</h2>
                            </div>
                        </div>

                        <div className=' w-[11%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Итого:</p>
                                <h2 className='font-medium'>£54.55</h2>
                            </div>
                        </div>

                        <div className='w-[5%] h-[80%] flex justify-center items-center'>
                            <img src={SelectIcons} alt="" />
                        </div>
                    </div>

                    <div className='shadow-md rounded-xl w-[82%] h-auto py-5 flex items-center'>
                        <div className=' w-24 h-full flex justify-center items-center'>
                            <img src={Logotip3} alt="" />
                        </div>

                        <div className=' w-[47%] h-[80%] border-r-[1px] border-gray-300 flex justify-start items-center pl-4'>
                            <h2 className='font-medium'>ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</h2>
                        </div>

                        <div className=' w-[14%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Сроки:</p>
                                <h2 className='font-medium'>10-14 дней</h2>
                            </div>
                        </div>

                        <div className=' w-[15%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Стоимость доставки:</p>
                                <h2 className='font-medium'>от £13.00</h2>
                            </div>
                        </div>

                        <div className=' w-[11%] h-[80%] border-r-[1px] border-gray-300 flex justify-center items-center'>
                            <div>
                                <p className='text-sm'>Итого:</p>
                                <h2 className='font-medium'>£90.50</h2>
                            </div>
                        </div>

                        <div className='w-[5%] h-[80%] flex justify-center items-center'>
                            <img src={SelectIcons} alt="" />
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}

export default SummaPage
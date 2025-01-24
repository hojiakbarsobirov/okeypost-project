import React from 'react'
import Img1 from '../public/summa-page-img1.png'
import Img2 from '../public/summa-page-img2.png'
import Img3 from '../public/summa-page-img3.png'
import Img4 from '../public/summa-page-img4.png'
import Logotip1 from './../public/logotip1.png'
import Logotip2 from './../public/logotip2.png'
import Logotip3 from './../public/logotip3.png'
import SelectIcons from '../public/select-icons.png'
import BannerImg2 from '../public/banner-img-3.png'
import PhoneIcons from '../public/phone-icons.png'
import WatsAppIcons from '../public/watsapp-icons.png'
import ChatIcons from '../public/chat-icons.png'


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

            <div className='w-full h-20 flex justify-center items-center mb-5'>
                <div className='w-[80%] h-full flex justify-start items-end'>
                    <h2 className='font-bold w-full h-1 text-3xl'>Услуги склада</h2>
                </div>
            </div>

            <section className='mb-10 w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex flex-wrap justify-between items-start gap-5'>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Консолидация </h2>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£1.00/1 трек</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Заполнение декларации </h2>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£1.00</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Дополнительная упаковка </h2>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£5.00</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Упаковка xрупкиx предметов </h2>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£10.00</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Заполнение декларации </h2>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£1.00</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Разделение заказа </h2>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£2.00</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Сборка исходящей посылки вне очереди или экспресс сборка</h2>
                            <p className='text-sm text-gray-500'>Чтобы сэкономить время</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-start items-center px-8'>
                            <h2 className='font-bold'>£5.00</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Фото содержимого входящей посылки</h2>
                            <p className='text-sm text-gray-500'>3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-start items-center px-8'>
                            <h2 className='font-bold'>£1.00 за 1 фото</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Возврат вещей в магазин</h2>
                            <p className='text-sm text-gray-500'>В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес"</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-start items-center px-8'>
                            <h2 className='font-bold'>£10 + почтовые расходы</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Проверка техники на работоспособность</h2>
                            <p className='text-sm text-gray-500'>Проверка электроники на включение/выключение (запрос через тикеты).</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-start items-center px-8'>
                            <h2 className='font-bold'>£10</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Удаление инвойса</h2>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-start items-center px-8'>
                            <h2 className='font-bold'>Бесплатно</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Дополнительная упаковка</h2>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-start items-center px-8'>
                            <h2 className='font-bold'>По договоренности</h2>
                        </div>
                    </div>

                </header>
            </section>

            <div className=' w-full h-20 flex justify-center items-center '>
                <div className='w-[80%] h-full flex justify-start items-end'>
                    <h2 className='font-bold w-full h-1 text-3xl'>Покупки с операторами Okeypost.com</h2>
                </div>
            </div>

            <section className='w-full py-10 h-auto flex justify-center items-center'>
                <header className='w-[80%] h-full flex flex-wrap justify-between items-center gap-5'>

                    <div className='shadow-md w-full h-auto py-5 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Быстрое оформление покупок в интернет-магазинах</h2>
                            <p className='text-sm text-gray-500 w-[80%]'>Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[30%] h-auto flex justify-start items-center px-8'>
                            <h2 className='font-bold text-sm'>По 5% от стоимости товаров
                                минимум £7 для каждого магазина
                                Но не менее £7 для каждого лота eBay</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-full h-auto py-5 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Фото товара по услуге "Покупка с операторами"</h2>
                            <p className='text-sm text-gray-500 '>Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"</p>
                        </div>

                        <div className='border-l-2 border-gray-300 w-[24%] h-auto flex justify-start items-center px-8'>
                            <h2 className='font-bold text-sm'>£2</h2>
                        </div>
                    </div>

                </header>
            </section>

            <section className='w-full h-auto py-14 flex justify-center items-center'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto rounded-2xl bg-cover bg-center flex justify-evenly items-center'>

                    <div className='flex justify-center items-center w-[35%] h-full p-6'>
                        <img className='w-[300px]' src={BannerImg2} alt="" />
                    </div>

                    <div className=' w-[50%] h-full flex justify-evenly space-y-4 items-start flex-col p-2'>
                        <h2 className='text-2xl font-bold text-white'>Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</h2>
                        <input className='w-[55%] h-12 border-b-2 border-gray-300 focus:outline-none text-white pl-4 bg-transparent placeholder:text-gray-200' placeholder='Введите ссылку на товар' type="text" />
                        <div className='flex w-full justify-start space-x-20'>
                            <button className='bg-green-500 text-white px-4 py-3 rounded-full'>Попробовать</button>
                            <p className='text-sm w-[60%] text-gray-300'>Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className=' w-full h-20 flex justify-center items-center '>
                <div className='w-[80%] h-full flex justify-start items-end'>
                    <h2 className='font-bold w-full h-1 text-3xl'>Страхование</h2>
                </div>
            </div>

            <section className=' w-full h-auto py-20 flex justify-center items-center'>
                <header className='w-[85%] h-full flex justify-center items-center flex-col gap-10'>

                    <div className='bg-white shadow-md w-[95%] h-auto py-5 rounded-lg flex justify-between items-center px-8'>
                        <div className='w-[50%] h-[80%] flex justify-start items-center'>
                            <h2 className='font-bold'>Дополнительное страxование</h2>
                        </div>
                        <div className='w-[50%] h-[80%] flex justify-start items-center border-l-2 border-gray-400 pl-8'>
                            <h2 className='font-bold'>5% от суммы на которую xотите застраxовать</h2>
                        </div>
                    </div>

                    <div className='bg-white shadow-md w-[95%] h-auto py-5 rounded-lg flex justify-between items-center px-8'>
                        <div className='w-[50%] h-[80%] flex justify-start items-center'>
                            <h2 className='font-bold'>Почта России и ЕМС</h2>
                        </div>
                        <div className='w-[50%] h-[80%] flex justify-start items-center border-l-2 border-gray-400 pl-8'>
                            <h2 className='font-bold'>Застраxовано по умолчанию на £50.00</h2>
                        </div>
                    </div>

                    <div className='bg-white shadow-md w-[95%] h-auto py-5 rounded-lg flex justify-between items-center px-8'>
                        <div className='w-[50%] h-[80%] flex justify-start items-center'>
                            <h2 className='font-bold'>Мелкие пакеты</h2>
                        </div>
                        <div className='w-[50%] h-[80%] flex justify-start items-center border-l-2 border-gray-400 pl-8'>
                            <h2 className='font-bold'>Застраxовано на £20.00</h2>
                        </div>
                    </div>

                </header>
            </section>

            <div className=' w-full h-20 flex justify-center items-center '>
                <div className='w-[80%] h-full flex justify-start items-end'>
                    <h2 className='font-bold w-full h-1 text-3xl'>Дополнительная упаковка</h2>
                </div>
            </div>

            <section className=' w-full h-auto flex justify-center items-center py-14'>
                <header className=' w-[80%] h-full flex flex-wrap justify-between items-start gap-5'>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Многослойная пленка </h2>
                            <p className='text-sm text-gray-500'>Дополнительная защита покупок</p>
                        </div>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£3.99</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Упаковка в пакет </h2>
                            <p className='text-sm text-gray-500'>Надежно защищает от влаги</p>
                        </div>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£1.99     </h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Упаковка в коробку с двойными стенками</h2>
                            <p className='text-sm text-gray-500'>Надежно защищает от влаги</p>
                        </div>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£4.99</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Наклейка “Обращаться с осторожностью”</h2>
                            <p className='text-sm text-gray-500'>Дополнительная защита покупок</p>
                        </div>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£0.25</h2>
                        </div>
                    </div>

                    <div className='shadow-md w-[595px] h-16 rounded-md flex justify-between items-center px-5'>
                        <div>
                            <h2 className='font-bold'>Наклейка “Хрупкий груз”</h2>
                            <p className='text-sm text-gray-500'>Дополнительная защита покупок</p>
                        </div>
                        <div className='border-l-2 border-gray-300 w-[25%] h-10 flex justify-center items-center'>
                            <h2 className='font-bold'>£0.25</h2>
                        </div>
                    </div>

                </header>
            </section>

            <section className=' w-full h-auto flex justify-center items-center py-10'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto py-10 bg-cover bg-center rounded-xl flex justify-center items-center'>
                    <div className=' w-[90%] h-[150px] flex justify-between items-center px-5'>
                        <h2 className='font-bold text-white text-3xl'>Остались вопросы? Спросите нас в соцсетях!</h2>

                        <div className='flex space-x-2'>
                            <img className='w-14' src={PhoneIcons} alt="" />
                            <img className='w-14' src={WatsAppIcons} alt="" />
                            <img className='w-14' src={ChatIcons} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SummaPage
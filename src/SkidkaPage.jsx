import React from 'react'
import Product1 from '../public/product1.png'
import Product2 from '../public/product2.png'
import Product3 from '../public/product3.png'
import Product4 from '../public/product4.png'
import Product5 from '../public/product5.png'
import Product6 from '../public/product6.png'
import Product7 from '../public/product7.png'
import Product8 from '../public/product8.png'
import Product9 from '../public/product9.png'
import Product10 from '../public/product10.png'

const SkidkaPage = () => {

    return (
        <>
            <section className='mb-8 w-full h-auto flex justify-center items-start pt-28'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-[40vh] bg-cover bg-center rounded-xl flex justify-center items-center'>
                    <div className=' w-[87%] h-full flex justify-evenly items-start flex-col'>
                        <p className='text-sm text-gray-300'>Главная  /  Распродажи</p>
                        <h2 className='font-bold text-white text-4xl'>Распродажи</h2>
                        <h2 className='text-white font-bold text-2xl'>ранний доступ к распродажам в магазинах</h2>
                        <button className='bg-green-500 px-4 py-3 text-white rounded-full'>Получить адрес в UK</button>
                    </div>
                </div>
            </section>

            <section className=' w-full h-auto py-5 flex justify-center items-center'>
                <header className='w-[80%] h-full flex justify-start items-center'>
                    <h2 className='font-bold text-3xl w-[38%]'>Black Friday Early Access
                        ранний доступ к распродажам
                        в магазинах Великобритании!</h2>
                </header>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[85%] h-full flex flex-wrap justify-center items-start gap-10'>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product1} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Abercrombie & Fitch</h2>
                            <p>цены от <span className='font-bold'>£7.99 (3365₽)</span> разделе:</p>
                            <p>мужские вещи: <span className='text-green-500 font-bold'>CLEARANCE</span></p>
                            <p>женские вещи: <span className='text-green-500 font-bold'>CLEARANCE</span></p>
                            <p>качественные детские вещи</p>
                            <p>на <span className='text-green-500 font-bold'>Abercrombie kids</span></p>
                            <p className='text-green-500 font-bold'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product2} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Timberland</h2>
                            <p className='font-bold'>NEW!</p>
                            <p>Коллаб <span className='text-green-500 font-bold'>Tommy Hilfiger x</span></p>
                            <p className='text-green-500 font-bold'> Timberland!</p>
                            <p>Ботинки от<span className='font-bold'> £7.99 (3365₽)</span></p>
                            <p>Зимние шапки за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p className='text-green-500 font-bold'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product3} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Polo Ralph Lauren</h2>
                            <p><span className='font-bold text-green-500'>Рубашка</span> за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p><span className='font-bold text-green-500'>Худи</span> за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p><span className='font-bold text-green-500'>Свитшот с лого </span>за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p>До - <span className='font-bold'>40%</span> в разделе SALE</p>
                            <p className='text-green-500 font-bold pt-10'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product4} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Hollister Co.</h2>
                            <p>цены от <span className='font-bold'>£7.99 (3365₽)</span> разделе:</p>
                            <p>мужские вещи: <span className='font-bold text-green-500'>CLEARANCE</span></p>
                            <p>женские вещи: <span className='font-bold text-green-500'>CLEARANCE</span></p>
                            <p className='text-green-500 font-bold pt-20'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product5} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Michael Kors</h2>
                            <p className='font-bold'>Новая коллекция!</p>
                            <p className='font-bold'>Michael Kors x 007 (James Bond)</p>
                            <p className='font-bold'>HOLIDAY HEAD START</p>
                            <p>- <span className='font-bold'>60%</span> на сумки, обувь и одежду</p>
                            <p className='text-green-500 font-bold pt-10'>В магазин →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product6} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Аутлет Saks OFF 5TH</h2>
                            <p className='font-bold'>Black Friday Early Access</p>
                            <p>Брендовые шапки, шарфы и перчатки - <span className='font-bold'>60% OFF</span></p>
                            <p>Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger</p>
                            <p className='text-green-500 font-bold pt-10'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product7} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>Victoria's Secret</h2>
                            <p className='font-bold'>Лосьоны и мисты за £7.99 (3365₽)</p>
                            <p>7 трусиков за £7.99 (3365₽)</p>
                            <p>Халаты за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p><span className='font-bold'>Потрать £7.99 (3365₽)</span> - получи <span className='font-bold'>купон на $25</span> на следующий заказ</p>
                            <p className='text-green-500 font-bold pt-2'>В магазин →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product8} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>levi.com</h2>
                            <p><span className='font-bold text-green-500'>Джинсы</span> от <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p className='font-bold pt-8'>Скидка 30% на заказы от $100 с кодом TREAT30</p>
                            <p className='text-green-500 font-bold pt-8'>В магазин →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product9} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>UGG® - вход с VPN</h2>
                            <p>Угги за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p>Ботинки UGG от <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p>в разделе <span className='font-bold text-green-500'>SALE</span></p>
                            <p><span className='font-bold text-green-500'>Мужские угги</span> за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p><span className='font-bold text-green-500'>Слипперы</span> за <span className='font-bold'>£7.99 (3365₽)</span></p>
                            <p className='text-green-500 font-bold pt-4'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                    <div className=' w-[45%] h-[300px] flex'>
                        <div className='w-[50%] h-full'>
                            <img className='h-full' src={Product10} alt="" />
                        </div>
                        <div className=' w-[50%] h-full flex justify-start items-start flex-col space-y-3 p-4'>
                            <h2 className='font-bold text-xl'>New Balance</h2>
                            <p className='font-bold'>Вход с VPN</p>
                            <p>- <span className='font-bold'>30%</span> на некоторые модели</p>
                            <p><span className='font-bold'>Бесплатная</span> доставка <span className='font-bold'>$50+</span></p>
                            <p className='text-green-500 font-bold pt-20'>Только выкуп с оператором →</p>
                        </div>
                    </div>

                </header>
            </section>
        </>
    )
}

export default SkidkaPage
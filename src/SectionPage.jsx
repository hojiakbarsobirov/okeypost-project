import React from 'react'
import BannerImg from './../public/background-banner-img.png'
import Menyu from '../public/menyu.png'
import RusFlag from '../public/rus-flag.png'
import EngFlag from '../public/eng-flag.png'
import KurtkaImg from '../public/kurtka-img.png'
import FormaOne from '../public/forma-one.png'
import FormaTwo from '../public/forma-two.png'
import Ilyustratsiy from '../public/illyustratsiy.png'

const SectionPage = () => {
  return (
    <>
      <section className=' w-full h-auto flex justify-center items-center pt-28 mb-10'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto rounded-2xl bg-cover bg-center flex justify-evenly items-center'>
          <div className=' w-[50%] h-full flex justify-evenly space-y-10 items-start flex-col p-2'>
            <h2 className='text-6xl font-bold text-white'>Доставка товаров из Великобритании в Россию</h2>
            <p className='text-gray-300'>Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
            </p>
            <button className='bg-green-500 text-white px-4 py-3 rounded-full'>Получить адрес в UK</button>
          </div>

          <div className='flex justify-center items-center w-[35%] h-full'>
            <img className='h-[85%]' src={BannerImg} alt="" />
          </div>
        </div>
      </section>

      <section className='mb-10 w-full h-auto'>
        <div className='  w-full h-auto py-8 flex justify-center items-center'>
          <div className=' w-[80%] h-full flex justify-start items-center'>
            <h2 className='text-4xl font-bold w-[30%]'>Насколько выгодно покупать?</h2>
          </div>
        </div>

        <div className=' w-full h-auto flex justify-center items-center'>
          <div className='w-full h-full flex justify-center items-center'>
            <img className='w-[90%]' src={Menyu} alt="" />
          </div>
        </div>

        <header className=' w-full h-auto py-10 flex flex-wrap justify-evenly items-center gap-10'>

          <div className='bg-white w-[300px] h-[300px] flex justify-center space-y-10 items-center flex-col p-4'>
            <h2 className='text-xl font-bold '>Columbia Barlow Pass 550 Turbodown Jacket</h2>
            <div className='w-full h-16 bg-gray-100 rounded-lg flex justify-start items-center px-5 space-x-5'>
              <img className='w-14' src={RusFlag} alt="" />
              <div className='space-y-2'>
                <p className='text-sm'>Цена в России</p>
                <b className='text-lg'>7891,46₽</b>
              </div>
            </div>
          </div>

          <div className='bg-gray-100 w-[300px] h-[300px] rounded-full flex justify-center items-center'>
            <img className='w-full' src={KurtkaImg} alt="" />
          </div>

          <div className='bg-white w-[300px] h-[300px] flex justify-center space-y-10 items-center flex-col p-4'>
            <h2 className='text-xl font-bold '>Доставка одежды из Великобритании  от <span className='text-green-500'>£7.79</span></h2>
            <div className='w-full h-16 bg-gray-100 rounded-lg flex justify-start items-center px-5 space-x-5'>
              <img className='w-14' src={EngFlag} alt="" />
              <div className='space-y-2'>
                <p className='text-sm'>Цена в UK</p>
                <b className='text-lg text-green-500'>£80.62</b>
              </div>
            </div>
          </div>
        </header>

        <header className=' w-full h-auto py-10 flex justify-center items-center'>
          <div className=' w-[80%] h-full flex flex-wrap justify-around items-center gap-10'>
            <img className='w-24' src={FormaOne} alt="" />
            <div className='space-y-2'>
              <p className='text-sm'>Срок доставки примерно 10 дней</p>
              <h2 className='text-2xl font-bold'>Вы экономите до <span className='text-green-500'>$119.56</span></h2>
            </div>
            <img className='w-24' src={FormaTwo} alt="" />
          </div>
        </header>
      </section>

      <section className='w-full h-auto py-14 flex justify-center items-center'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto rounded-2xl bg-cover bg-center flex justify-evenly items-center'>

          <div className='flex justify-center items-center w-[35%] h-full p-6'>
            <img className='w-[300px]' src={Ilyustratsiy} alt="" />
          </div>

          <div className=' w-[50%] h-full flex justify-evenly space-y-4 items-start flex-col p-2'>
            <h2 className='text-2xl font-bold text-white'>Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</h2>
            <p className='text-gray-300'>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>
            <button className='bg-green-500 text-white px-4 py-3 rounded-full'>Попробовать</button>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto'>
        <div className=' w-full h-auto py-8 flex justify-center items-center'>
          <div className='w-[80%] h-full flex justify-start items-center'>
            <h2 className='text-3xl font-bold w-[50%]'>OkeyPost удобная и быстрая доставка посылок из Великобритании </h2>
          </div>
        </div>

        <div className=' w-full h-auto flex justify-center items-center mb-10'>
          <div className=' w-[80%] h-full flex justify-start'>
            <p className='w-[50%] text-gray-500'>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.</p>
          </div>
        </div>

        <section className=' w-full h-auto flex justify-center items-center'>
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
      </section>
    </>
  )
}

export default SectionPage
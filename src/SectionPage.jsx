import React from 'react'
import BannerImg from './../public/background-banner-img.png'

const SectionPage = () => {
  return (
    <section className=' w-full h-screen flex justify-center items-center'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-[65%] rounded-2xl bg-cover bg-center flex justify-evenly'>
          <div className=' w-[45%] h-full flex justify-evenly items-start flex-col p-2'>
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
  )
}

export default SectionPage
import React from 'react'
import Item from './shop'
import PhoneIcons from '../public/phone-icons.png'
import WatsAppIcons from '../public/watsapp-icons.png'
import ChatIcons from '../public/chat-icons.png'

const Магазины = () => {
  return (
    <>
      <section className='mb-10 w-full h-auto flex justify-center items-center pt-28'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto py-10 bg-cover bg-center rounded-xl flex justify-center items-center'>
          <div className=' w-[87%] h-full flex justify-center space-y-10 items-start flex-col'>
            <p className='text-sm text-gray-300'>Главная / Популярные магазины</p>
            <h2 className='text-4xl font-bold text-white'>Популярные магазины</h2>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto flex flex-wrap justify-center items-center gap-10 p-10'>
        {Item?.map((item, index) => (
          <div key={index} className='shadow-md w-[270px] h-[220px] rounded-xl flex justify-center items-start flex-col space-y-10 px-4'>
            <img src={item.img} alt="" />
            <h2 className='font-bold'>{item.title}</h2>
          </div>
        ))}
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

export default Магазины
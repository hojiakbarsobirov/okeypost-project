import React from 'react'
import item from './Data'
import PhoneIcons from '../public/phone-icons.png'
import WatsAppIcons from '../public/watsapp-icons.png'
import ChatIcons from '../public/chat-icons.png'

const БлогPage = () => {
  return (
    <>
      <section className='mb-10 w-full h-auto flex justify-center items-center pt-28'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto py-10 bg-cover bg-center rounded-xl flex justify-center items-center'>
          <div className=' w-[87%] h-full flex justify-center space-y-10 items-start flex-col'>
            <p className='text-sm text-gray-300'>Главная  /  Блог</p>
            <h2 className='text-4xl font-bold text-white'>Блог</h2>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto  flex justify-center items-center'>
        <header className=' w-[90%] h-full flex flex-wrap justify-center items-center gap-14'>
          {item?.map((item) => (
            <div className=' p-2 rounded-lg w-[400px] h-[300px] flex justify-start items-center flex-col'>
              <img className='h-[65%]' src={item.img} alt="" />
              <h2 className='font-bold w-[80%] mb-6'>{item.title}</h2>

              <div className='w-full flex justify-between items-center px-10'>
                <p className='text-sm text-gray-500'>{item.minut}</p>
                <p className='text-sm text-gray-500'>{item.date}</p>
              </div>
            </div>
          ))}
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

export default БлогPage
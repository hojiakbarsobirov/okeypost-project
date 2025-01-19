import React from 'react'

const SectionTwoPage = () => {
  return (
    <section className='bg-gray-100 w-full h-auto flex justify-center items-start pt-28'>
            <div className='bg-[url("/public/background-banner.png")] w-[90%] h-[40vh] bg-cover bg-center rounded-xl flex justify-center items-center'>
                <div className=' w-[80%] h-full flex justify-evenly items-start flex-col'>
                    <p className='text-sm text-gray-300'>Главная  /  Как покупать</p>
                    <h2 className='font-bold text-white text-4xl'>Научим покупать в Великобритании!</h2>
                    <h2 className='text-white font-bold text-2xl'>и экономить до 70%</h2>
                    <button className='bg-green-500 px-4 py-3 text-white rounded-full'>Получить адрес в UK</button>
                </div>
            </div>
        </section>
  )
}

export default SectionTwoPage
import React from 'react'

const SkidkaPage = () => {

    return (
        <section className='bg-gray-100 w-full h-screen flex justify-center items-start py-40'>
            <div className='bg-[url("/public/background-banner.png")] w-[90%] h-[40vh] bg-cover bg-center rounded-xl flex justify-center items-center'>
                <div className=' w-[80%] h-full flex justify-evenly items-start flex-col'>
                    <p className='text-sm text-gray-300'>Главная  /  Распродажи</p>
                    <h2 className='font-bold text-white text-4xl'>Распродажи</h2>
                    <h2 className='text-white font-bold text-2xl'>ранний доступ к распродажам в магазинах</h2>
                    <button className='bg-green-500 px-4 py-3 text-white rounded-full'>Получить адрес в UK</button>
                </div>
            </div>
        </section>)
}

export default SkidkaPage
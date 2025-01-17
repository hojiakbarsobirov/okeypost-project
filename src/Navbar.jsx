import React from 'react'
import Logo from '/public/logotip.png'
import User from '/public/User.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='bg-white w-full h-24 flex justify-evenly items-center fixed'>
        <Link to={'/'}>
        <img className='w-[150px]' src={Logo} alt="" />
        </Link>

        <ul className='flex items-center space-x-12 font-medium text-sm'>
            <Link to={'/two'}>
            <li>Как покупать</li>
            </Link>
            <Link to={'/skidka'}>
            <li>Распродажи</li>
            </Link>
            <li>Цены</li>
            <li>Помощь</li>
            <li>Бонусы</li>
            <li>Блог</li>
            <li>Магазины</li>
        </ul>

        <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-2 font-medium'>
                <img className='w-5' src={User} alt="" />
                <h2>Вход</h2>
            </div>
            <button className='bg-green-500 px-4 py-3 rounded-full text-white'>Связаться с нами</button>
        </div>
    </section>
  )
}

export default Navbar
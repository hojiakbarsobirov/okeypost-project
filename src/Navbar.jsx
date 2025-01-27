import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '/public/logotip.png';
import User from '/public/User.png';
import ModalOne from './ModalOne';

const Navbar = () => {

  const [showModal, setShowModal] = useState(false)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="bg-white w-full h-24 flex justify-around items-center md:px-28 fixed z-50 shadow-sm">
        <Link to={'/'}>
          <img className="w-[150px]" src={Logo} alt="Logo" />
        </Link>

        <ul className="hidden md:flex items-center space-x-10 font-medium text-sm">
          <Link className='focus:border-b-2 border-black' to={'/Как покупать'}>
            <li>Как покупать</li>
          </Link>
          <Link className='focus:border-b-2 border-black' to={'/Распродажи'}>
            <li>Распродажи</li>
          </Link>
          <Link className='focus:border-b-2 border-black' to={'/Цены'}>
            <li>Цены</li>
          </Link>
          <li><Link className='focus:border-b-2 border-black' to={'/Помощь'}>Помощь</Link></li>
          <li><Link className='focus:border-b-2 border-black' to={'/Бонусы'}>Бонусы</Link></li>
          <li><Link className='focus:border-b-2 border-black' to={'/Блог'}>Блог</Link></li>
          <li><Link className='focus:border-b-2 border-black' to={'/Магазины'}>Магазины</Link></li>
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-5 font-medium text-sm py-5">
              <Link to={'/Как покупать'} onClick={toggleMenu}>
                <li>Как покупать</li>
              </Link>
              <Link to={'/Распродажи'} onClick={toggleMenu}>
                <li>Распродажи</li>
              </Link>
              <Link to={'/Цены'} onClick={toggleMenu}>
                <li>Цены</li>
              </Link>
              <li onClick={toggleMenu}>Помощь</li>
              <li onClick={toggleMenu}>Бонусы</li>
              <li onClick={toggleMenu}>Блог</li>
              <li onClick={toggleMenu}>Магазины</li>
            </ul>
          </div>
        )}

        {/* User and Button */}
        <div className="hidden md:flex items-center space-x-5">
          <button onClick={() => setShowModal(true)} className="flex items-center space-x-2 font-medium py-2">
            <img className="w-5" src={User} alt="User" />
            <h2>Вход</h2>
          </button>
          <button className="bg-green-500 px-4 py-3 rounded-full text-white">Связаться с нами</button>
        </div>
      </section>

      {showModal && <ModalOne setShowModal={setShowModal}/>}
    </>
  );
};

export default Navbar;

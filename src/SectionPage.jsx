import React from 'react'
import BannerImg from './../public/background-banner-img.png'
import Menyu from '../public/menyu.png'
import RusFlag from '../public/rus-flag.png'
import EngFlag from '../public/eng-flag.png'
import KurtkaImg from '../public/kurtka-img.png'
import FormaOne from '../public/forma-one.png'
import FormaTwo from '../public/forma-two.png'
import Ilyustratsiy from '../public/illyustratsiy.png'
import Logotip1 from './../public/logotip1.png'
import Logotip2 from './../public/logotip2.png'
import Logotip3 from './../public/logotip3.png'
import SelectIcons from '../public/select-icons.png'
import Illyustratsiya1 from '../public/illyustratsiya.png'
import Illyustratsiya2 from '../public/illustration.png'
import Illyustratsiya3 from '../public/illyustratsiya2.png'
import Illyustratsiya4 from '../public/Illyustratsiya-3.png'
import BannerImg2 from '../public/banner-img.png'
import CardIcons1 from '../public/card-icons1.png'
import CardIcons2 from '../public/card-icons2.png'
import CardIcons3 from '../public/card-icons3.png'

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

      <section className='mb-20 w-full h-auto'>
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

      <section className=' w-full h-auto py-5 mb-20'>
        <div className='mb-10 w-full h-auto py-5 flex justify-center items-center'>
          <div className='w-[82%] h-full  flex justify-start items-center'>
            <h2 className='font-bold text-3xl'>Варианты доставки:</h2>
          </div>
        </div>

        <header className='mb-10 w-full h-auto space-y-10 flex justify-around items-center flex-col'>

          <div className='shadow-md rounded-xl w-[82%] h-24 flex items-center'>
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

          <div className='shadow-md rounded-xl w-[82%] h-24 flex items-center'>
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

          <div className='shadow-md rounded-xl w-[82%] h-24 flex items-center'>
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

      <section className=' w-full h-auto py-20'>
        <div className=' w-full h-auto mb-10 py-5 flex justify-center items-center'>
          <div className=' w-[80%] h-full flex justify-start items-center'>
            <h2 className='font-bold text-3xl w-[40%]'>4 простых шага для ваших покупок в Великобритании </h2>
          </div>
        </div>

        <header className='mb-2 w-full h-[350px] flex flex-wrap justify-center items-center gap-10'>
          <div className=' w-[280px] h-[350px]'>
            <div className=' w-full h-[60%] mb-3 flex justify-center items-center'>
              <img className='h-full' src={Illyustratsiya1} alt="" />
            </div>

            <div className=' w-full h-[40%] px-2'>
              <h2 className='font-bold w-[50%] mb-2'>вы ВЫБИРАЕТЕ ТОВАР</h2>
              <p className='text-sm'>в английском магазине, оплачиваете и указываете <span className='text-green-500'>адрес склада</span> OkeyPost</p>
            </div>
          </div>

          <div className=' w-[280px] h-[350px]'>
            <div className='w-full h-[60%] mb-5 flex justify-center items-center'>
              <img className='h-full' src={Illyustratsiya2} alt="" />
            </div>

            <div className=' w-full h-[40%] px-2'>
              <h2 className='font-bold w-[70%] mb-4'>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</h2>
              <p className='text-sm'>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</p>
            </div>
          </div>

          <div className=' w-[280px] h-[350px]'>
            <div className='w-full mb-5 h-[60%] flex justify-center items-center'>
              <img className='h-full' src={Illyustratsiya3} alt="" />
            </div>

            <div className=' w-full h-[40%] px-2'>
              <h2 className='font-bold w-[70%] mb-4'>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</h2>
              <p className='text-sm'>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</p>
            </div>
          </div>

          <div className=' w-[280px] h-[350px]'>
            <div className=' w-full h-[60%] mb-5 flex justify-center items-center'>
              <img className='h-full' src={Illyustratsiya4} alt="" />
            </div>

            <div className=' w-full h-[40%] px-2'>
              <h2 className='font-bold w-[70%] mb-4'>ЗАБИРАЕТЕ
                свою ПОСЫЛКУ</h2>
              <p className='text-sm'>в пункте выдачи, на почте или с курьером</p>
            </div>
          </div>

        </header>

        <div className=' w-full h-auto py-5 flex justify-center items-center'>
          <div className=' w-[81%] h-full flex justify-start items-center'>
            <p className='text-sm w-[40%]'>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.</p>
          </div>
        </div>

        <div className=' w-full h-auto py-5 flex justify-center items-center'>
          <div className=' w-[81%] h-full flex justify-start items-center'>
            <button className='bg-green-500 px-5 py-3 rounded-full text-white font-medium'>Быстрая покупка</button>
          </div>
        </div>
      </section>

      <section className='w-full h-auto py-14 flex justify-center items-center'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto rounded-2xl bg-cover bg-center flex justify-evenly items-center'>

          <div className='flex justify-center items-center w-[35%] h-full p-6'>
            <img className='w-[300px]' src={BannerImg2} alt="" />
          </div>

          <div className=' w-[50%] h-full flex justify-evenly space-y-4 items-start flex-col p-2'>
            <h2 className='text-2xl font-bold text-white'>Виртуальный тур по нашему складу в реальном времени</h2>
            <p className='text-gray-300'>Вы можете всегда посмотреть на нашу слаженую работу на складе</p>
            <button className='bg-green-500 text-white px-4 py-3 rounded-full'>Попробовать</button>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto py-10'>
        <div className=' w-full h-auto py-5 flex justify-center items-center'>
          <div className=' w-[85%] h-full flex justify-start items-start flex-col'>
            <h2 className='font-bold text-4xl'>120 000 довольных клиентов в России </h2>
            <h2 className='font-bold text-4xl'>уже сделали свой выбор</h2>
          </div>
        </div>

        <div className='w-full h-auto py-3 flex justify-center items-center'>
          <div className=' w-[85%] h-full flex justify-start items-center'>
            <p className='text-gray-600'>За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</p>
          </div>
        </div>

        <header className=' w-full h-auto py-10 flex flex-wrap justify-evenly items-center gap-9'>

          <div className='bg-white w-[350px] h-[200px] rounded-xl flex justify-center items-start space-y-3 p-4 flex-col'>
            <img src={CardIcons1} alt="" />
            <h2 className='font-bold '>Больше не значит дороже</h2>
            <p className='text-sm'>С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.</p>
          </div>

          <div className='bg-white w-[350px] h-[200px] rounded-xl flex justify-center items-start space-y-3 p-4 flex-col'>
            <img src={CardIcons2} alt="" />
            <h2 className='font-bold'>Быстрая обработка посылок</h2>
            <p className='text-sm'>Посылка обрабатывается не дольше 48 часов после поступления на склад.</p>
          </div>

          <div className='bg-white w-[350px] h-[200px] rounded-xl flex justify-center items-start flex-col space-y-3 p-4'>
            <img src={CardIcons3} alt="" />
            <h2 className='font-bold'>SMS-уведомления</h2>
            <p className='text-sm'>Отслеживайте весь процесс с помощью sms-уведомлений.</p>
          </div>
        </header>
      </section>

      <section className='w-full h-auto py-10'>
        <div className='w-full h-auto py-2 flex justify-center items-center'>
          <div className=' w-[85%] h-full flex justify-start items-center'>
            <h2 className='font-bold text-3xl'>Ваш личный адрес в Великобритании  для покупок</h2>
          </div>
        </div>

        <div className=' w-full h-auto py-5 flex justify-center items-center'>
          <div className=' w-[85%] h-full flex justify-center items-start flex-col space-y-5'>
            <p className='text-gray-700'>С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!</p>
            <p className='text-gray-700'>При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.</p>
            <p className='text-gray-700'>У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.</p>
            <p className='text-gray-700'>Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb[ магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!</p>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto flex justify-center items-center p-10'>
            <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto py-10 bg-cover bg-center rounded-xl flex justify-center items-center'>
                <div className=' w-[85%] h-[150px] flex justify-between items-center'>

                  <div className=' w-[380px] h-full flex justify-center items-center'>
                    <h2 className='text-white font-bold text-2xl'>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</h2>
                  </div>

                  <div className=' w-[450px] h-full flex justify-center items-center'>
                    <input className='w-[90%] h-12 bg-transparent border-b-2 border-gray-300 pl-4 focus:outline placeholder:text-gray-300' placeholder='Введите ваш email' type="text"  />
                  </div>

                  <div className=' w-[250px] h-full flex justify-start items-center'>
                    <button className='bg-green-500 px-5 py-3 text-white rounded-full font-medium'>Подписаться</button>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionPage
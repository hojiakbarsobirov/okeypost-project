import React from 'react'
import Img1 from '../public/two-page-img1.png'
import Img2 from '../public/two-page-img2.png'
import Img3 from '../public/two-page-img3.png'
import Img4 from '../public/two-page-img4.png'
import Img5 from '../public/two-page-img5.png'
import PhoneIcons from '../public/phone-icons.png'
import WatsAppIcons from '../public/watsapp-icons.png'
import ChatIcons from '../public/chat-icons.png'

const SectionTwoPage = () => {
  return (
    <>
      <section className='mb-5 w-full h-auto flex justify-center items-start pt-28'>
        <div className='bg-[url("/public/background-banner.png")] w-[90%] h-[40vh] bg-cover bg-center rounded-xl flex justify-center items-center'>
          <div className=' w-[80%] h-full flex justify-evenly items-start flex-col'>
            <p className='text-sm text-gray-300'>Главная  /  Как покупать</p>
            <h2 className='font-bold text-white text-4xl'>Научим покупать в Великобритании!</h2>
            <h2 className='text-white font-bold text-2xl'>и экономить до 70%</h2>
            <button className='bg-green-500 px-4 py-3 text-white rounded-full'>Получить адрес в UK</button>
          </div>
        </div>
      </section>

      <section className=' w-full h-auto py-10 flex justify-center items-center'>
        <div className='w-[80%] h-full flex justify-center items-start flex-col space-y-2'>
          <h2 className='font-bold text-3xl'>Покупать в Великобритании очень просто</h2>
          <p className='w-[56%] text-gray-600'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>
        </div>
      </section>

      <section className='w-full h-auto py-5 flex flex-wrap justify-center items-center gap-16'>
        <header className=' w-[25%] h-full flex justify-center items-center'>
          <img className='w-[60%]' src={Img1} alt="" />
        </header>

        <header className=' w-[60%] h-[300px] space-y-2'>
          <div className=' w-full h-24 flex flex-wrap gap-5'>

            <div className=' w-[17%] h-full flex flex-wrap gap-10 justify-center items-center'>
              <div className=' w-full h-[70%] flex justify-center items-center border-r-2 border-gray-300'>
                <h2 className='text-6xl text-green-500'>01</h2>
              </div>
            </div>

            <div className=' w-[40%] h-full flex justify-center items-center'>
              <h2 className='font-bold text-xl'>Получаем адрес для покупок в магазинах Великобритании </h2>
            </div>

          </div>

          <div className=' w-[90%] h-40'>
            <p className='text-gray-600'>Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.</p>
          </div>
        </header>
      </section>



      <section className='w-full h-auto py-5 flex flex-wrap justify-center items-center gap-16'>
        <header className=' w-[25%] h-full flex justify-center items-center'>
          <img className='w-[60%]' src={Img2} alt="" />
        </header>

        <header className=' w-[60%] h-[300px] space-y-2'>
          <div className=' w-full h-24 flex flex-wrap gap-5'>

            <div className=' w-[17%] h-full flex flex-wrap gap-10 justify-center items-center'>
              <div className=' w-full h-[70%] flex justify-center items-center border-r-2 border-gray-300'>
                <h2 className='text-6xl text-green-500'>02</h2>
              </div>
            </div>

            <div className=' w-[40%] h-full flex justify-center items-center'>
              <h2 className='font-bold text-xl'>Идём за покупками в онлайн-магазины</h2>
            </div>

          </div>

          <div className=' w-[90%] h-40'>
            <p className='text-gray-600'>Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, <span className='text-green-500 font-medium'>что покупать нельзя.</span></p>
          </div>
        </header>
      </section>


      <section className='w-full h-auto py-5 flex flex-wrap justify-center items-center gap-16'>
        <header className=' w-[25%] h-full flex justify-center items-center'>
          <img className='w-[60%]' src={Img3} alt="" />
        </header>

        <header className=' w-[60%] h-[300px] space-y-2'>
          <div className=' w-full h-24 flex flex-wrap gap-5'>

            <div className=' w-[17%] h-full flex flex-wrap gap-10 justify-center items-center'>
              <div className=' w-full h-[70%] flex justify-center items-center border-r-2 border-gray-300'>
                <h2 className='text-6xl text-green-500'>03</h2>
              </div>
            </div>

            <div className=' w-[40%] h-full flex justify-center items-center'>
              <h2 className='font-bold text-xl'>Следим за перемещением посылки до склада</h2>
            </div>

          </div>

          <div className=' w-[90%] h-40'>
            <p className='text-gray-600'>После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.</p>
          </div>
        </header>
      </section>


      <section className='w-full h-auto py-5 flex flex-wrap justify-center items-center gap-16'>
        <header className=' w-[25%] h-full flex justify-center items-center'>
          <img className='w-[60%]' src={Img4} alt="" />
        </header>

        <header className=' w-[60%] h-[300px] space-y-2'>
          <div className=' w-full h-24 flex flex-wrap gap-5'>

            <div className=' w-[17%] h-full flex flex-wrap gap-10 justify-center items-center'>
              <div className=' w-full h-[70%] flex justify-center items-center border-r-2 border-gray-300'>
                <h2 className='text-6xl text-green-500'>04</h2>
              </div>
            </div>

            <div className=' w-[40%] h-full flex justify-center items-center'>
              <h2 className='font-bold text-xl'>Оплачиваем доставку и покупки отправляются домой</h2>
            </div>

          </div>

          <div className=' w-[90%] h-40'>
            <p className='text-gray-600 mb-5'>Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно.</p>
            <p className='text-gray-600'>Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.</p>
          </div>
        </header>
      </section>



      <section className='w-full h-auto py-5 flex flex-wrap justify-center items-center gap-16'>
        <header className=' w-[25%] h-full flex justify-center items-center'>
          <img className='w-[60%]' src={Img5} alt="" />
        </header>

        <header className=' w-[60%] h-[300px] space-y-2'>
          <div className=' w-full h-24 flex flex-wrap gap-5'>

            <div className=' w-[17%] h-full flex flex-wrap gap-10 justify-center items-center'>
              <div className=' w-full h-[70%] flex justify-center items-center border-r-2 border-gray-300'>
                <h2 className='text-6xl text-green-500'>05</h2>
              </div>
            </div>

            <div className=' w-[40%] h-full flex justify-center items-center'>
              <h2 className='font-bold text-xl'>Получаем посылку и спешим сделать новый заказ</h2>
            </div>

          </div>

          <div className=' w-[90%] h-40'>
            <p className='text-gray-600'>Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)</p>
          </div>
        </header>
      </section>

      <div className=' w-full h-32 flex justify-center items-center'>
        <div className=' w-[80%] h-full flex justify-start items-center'>
          <button className='bg-green-500 px-5 py-4 text-white font-medium rounded-full'>Получить адрес в UK</button>
        </div>
      </div>


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

export default SectionTwoPage
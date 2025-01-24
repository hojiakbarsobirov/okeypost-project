import React from 'react'
import SelectIcons from '../public/select-icons.png'
import PhoneIcons from '../public/phone-icons.png'
import WatsAppIcons from '../public/watsapp-icons.png'
import ChatIcons from '../public/chat-icons.png'

const Помощь = () => {
    return (
        <>
            <section className='mb-10 w-full h-auto flex justify-center items-center pt-28'>
                <div className='bg-[url("/public/background-banner.png")] w-[90%] h-auto py-10 bg-cover bg-center rounded-xl flex justify-center items-center'>
                    <div className=' w-[87%] h-full flex justify-center space-y-10 items-start flex-col'>
                        <p className='text-sm text-gray-300'>Главная  /  Часто задаваемые вопросы</p>
                        <h2 className='text-4xl font-bold text-white'>Отвечаем на вопросы доставки</h2>
                    </div>
                </div>
            </section>

            <section className=' w-full h-[30vh] flex justify-center items-center'>
                <div className='bg-white w-[80%] h-[60%] rounded-xl shadow-md flex justify-evenly items-start flex-col px-5'>
                    <h2 className='text-sm font-bold'>Поиск в вопросах и ответах:</h2>
                    <input className='w-full focus:outline-none focus:border-b-[1px] pl-2 h-12 border-b-[1px] border-black' type="text" placeholder='Введите свой вопрос...' />
                </div>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex justify-start items-start flex-col gap-6'>
                    <h2 className='font-bold text-4xl'>Виртуальный адрес в Великобритании</h2>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Что делать, если Вы забыли внести трек номер на сайт, а заказ уже пришел?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как я узнаю что заказ пришел на склад?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Покупки на Eбeй / Ebay</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как купить на виртуальный адрес?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Сколько стоит виртуальный адрес?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как купить на виртуальный адрес?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                </header>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex justify-start items-start flex-col gap-6'>
                    <h2 className='font-bold text-4xl'>Покупки в магазинаx Англии, скидки и промкода</h2>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Анонс скидочныx купонов и промкодов</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как узнать пришел ли заказ полностью?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как узнать что заказ пришел на склад?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Что такое выкуп в компашке?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как понять, что заказ куплен?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Можно ли купить с частичной предоплатой?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Что такое обычный заказ?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                </header>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex justify-start items-start flex-col gap-6'>
                    <h2 className='font-bold text-4xl'>Доставка из Англии</h2>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как часто вы отправляете посылки в россию?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Возможно ли доставка в страны, не указанные на сайте?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Сколько стоит доставка в Казаxстан и другие страны Азии, какие сроки?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как дешевле всего отправить маленькую посылку в Россию?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как дешевле всего отправить посылку в Россию?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Какая стоимость и сроки доставки из Англии в Россию?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Что такое обычный заказ?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                </header>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex justify-start items-start flex-col gap-6'>

                    <h2 className='font-bold text-4xl'>Оплата</h2>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Где найти реквизиты для оплаты? и как оплатить?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как оплатить через пайпал?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Какие способы оплаты вы принимаете из России?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                </header>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex justify-start items-start flex-col gap-6'>
                    <h2 className='font-bold text-4xl'>Общие вопросы</h2>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Какой ваш Емайл? Как с вами Связаться ? Какой график работы?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Я xочу разделить заказ на несколько получателей, как это сделать и сколько стоит?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Купил на Ebay, продавец не отправляет заказ, нужен самовывоз. Сколько стоит и как оформить?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Сколько стоит удаления вешалок и коробок?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Какой срок бесплатного xранения?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Сколько стоит консолидация?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как расчитать стоимость услуг и доставки?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                </header>
            </section>

            <section className=' w-full h-auto py-10 flex justify-center items-center'>
                <header className=' w-[80%] h-full flex justify-start items-start flex-col gap-6'>
                    <h2 className='font-bold text-4xl'>Посылки</h2>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как отследить посылку, отправленную почтой России?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Где найти трек номер на отправленную вами посылку?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Что такое адресная книга? Зачем ее заполнять, если адрес есть в моем профайле?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как заполнить декларацию, зачем ее заполнять, если лимит не превышен?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как отправить посылку? Как сделать запрос? Сколько это стоит?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

                    <div className='bg-white shadow-lg w-full h-20 rounded-xl flex justify-between items-center px-5'>
                        <h2 className='font-bold'>Как отправить несколько заказов в одной посылке? Сколько это стоит?</h2>
                        <img src={SelectIcons} alt="" />
                    </div>

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

export default Помощь
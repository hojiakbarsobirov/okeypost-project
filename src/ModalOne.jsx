import CloseModal from '../public/close-modal.png'
import FormIcons1 from '../public/form-icons.png'
import FormIcons2 from '../public/form-icons2.png'
import FormIcons3 from '../public/form-icons3.png'

const ModalOne = ({ setShowModal }) => {

    return (
        <>
            <section className='bg-black w-full h-screen bg-opacity-50 fixed top-0 flex justify-center items-center'>
                <header className=' w-[500px] h-[550px] flex flex-col justify-center items-center'>
                    <div className=' w-full h-14 flex justify-end items-center pr-3'>
                        <img onClick={() => setShowModal(false)} className='cursor-pointer' src={CloseModal} alt="" />
                    </div>

                    <div className='bg-white w-[75%] h-full rounded-xl'>
                        <form className='w-full h-full flex justify-between items-start flex-col p-7'>
                            <h2 className='font-bold w-[70%] text-lg'>Выполните вход в ваш личный кабинет </h2>

                            <div className='space-y-2 w-full'>
                                <label className='font-medium' htmlFor="">Номер телефона:</label>
                                <input className='w-full h-12 border-[2px] rounded-md border-gray-300' type="text" />
                            </div>

                            <div className='space-y-2 w-full'>
                                <label className='font-medium' htmlFor="">Ваш email:</label>
                                <input className='w-full h-12 border-[2px] rounded-md border-gray-300' type="text" />
                            </div>

                            <div className='space-y-2 w-full'>
                                <label className='font-medium' htmlFor="">Ваш пароль:</label>
                                <input className='w-full h-12 border-[2px] rounded-md border-gray-300' type="text" />
                            </div>

                            <p className='text-[13px] text-green-500 font-medium mb-2'>Восстановление пароля <span className='text-black'>или</span> быстрая регистрация</p>

                            <div className='w-full flex justify-between items-center'>
                                <button className='px-4 w-[150px] py-3 bg-green-500 rounded-full text-white font-medium'>Войти</button>

                                <div className='flex space-x-1'>
                                    <img className='w-9' src={FormIcons1} alt="" />
                                    <img className='w-9' src={FormIcons2} alt="" />
                                    <img className='w-9' src={FormIcons3} alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </header>
            </section>

        </>
    )
}

export default ModalOne
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../resources/logo.webp'

const MailComponent = () => {
    return (
        <form className='text-white form-login mx-auto m-auto rounded-xl py-10 px-8 flex flex-col shadow-md login'>
            <div className='logo mb-10 flex items-center justify-center'>
                <img src={Logo} />
                <h1 className='uppercase text-4xl tracking-tight ml-5'>Validation <br />Software</h1>
            </div>
            <div className='mb-5'>
                <p>Confirme si es su identidad para pasar a la siguient etapa del curso</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 mb-10 mt-2 w-full group">
                    <p className='border-b-2 pt-2 pb-1 text-gray-500'>Yenky</p>
                    <span className='color-p text-xs absolute -top-2'>Nombre/s</span>
                </div>
                <div className="relative z-0 mb-10 mt-2 w-full group">
                    <p className='border-b-2 pt-2 pb-1 text-gray-500'>Valera Villareal </p>
                    <span className='color-p text-xs absolute -top-2'>Apellido/s</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 mb-10 mt-2 w-full group">
                    <p className='border-b-2 pt-2 pb-1 text-gray-500'>300724841</p>
                    <span className='color-p text-xs absolute -top-2'>Teléfono</span>
                </div>
                <div className="relative z-0 mb-10 mt-2 w-full group">
                    <p className='border-b-2 pt-2 pb-1 text-gray-500'>micorreo@gmal.com</p>
                    <span className='color-p text-xs absolute -top-2'>Mail</span>
                </div>
            </div>
            <div className="relative z-0 mb-10 mt-2 w-full group">
                <p className='border-b-2 pt-2 pb-1 text-gray-500'>72023358 </p>
                <span className='color-p text-xs absolute -top-2'>Comparendo</span>
            </div>
            <div className="relative z-0 mt-2 w-full group">
                <p className='border-b-2 pt-2 pb-1 text-gray-500'>CRA 16A N 29A74</p>
                <span className='color-p text-xs absolute -top-2'>Dirección</span>
            </div>
            <Link to={'/validation-software/validation'} className='mx-auto'>
                <button type="submit" id='button-submit' className="text-white opacity-90 hover:opacity-100 focus:ring-4 font-medium rounded-lg text-sm px-3 pt-2 pb-1.5 focus:outline-none mt-8 transition-all">Validar Identidad</button>
            </Link>
        </form>
    );
}

export default MailComponent;

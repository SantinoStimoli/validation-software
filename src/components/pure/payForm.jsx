import React from 'react';
import { Link } from 'react-router-dom';

const PayForm = ({ }) => {
    return (
        <div className='flex text-white flex-col items-center'>
            <div className='md:w-4/5 mb-10 mx-auto'>
                <h2 className='text-5xl tracking-tighter mb-5'>Metodos de pago</h2>
                <div className='mb-3'>
                    <p className='tracking-tighter'>En esta pestaña podas pagar la multa seleccionada: </p>
                    <b className='text-lg tracking-tighter color-p'>MULTA NUMERO 1</b>
                </div>
                <div className='mb-3'>
                    <p className='tracking-tighter'>La multa seleccionada pertenece a la persona con la cédula número: </p>
                    <b className='text-lg tracking-tighter color-p'>45238867</b>
                </div>
                <p className='tracking-tighter'>Luego de pagar la multa pasaremos a la etapa de verificación donde pondremos a prueba tus capacidades con un video y un par de preguntas que ayudaran a disminuir el total de la multa. Las preguntas deben ser respondidas por el dueño de la multa, por lo que verificaremos su identidad mediante el uso de su camara</p>
            </div>
            <form className='md:w-4/5 mx-auto'>

                <div className="grid grid-cols-2 gap-6">
                    <div className="relative z-0 mb-10 w-full group">
                        <input type="text" name="firstName" id="firstName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre/s</label>
                    </div>
                    <div className="relative z-0 mb-10 w-full group">
                        <input type="text" name="lastName" id="lastName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos/s</label>
                    </div>
                </div>
                <div className="relative z-0 mb-10 w-full group">
                    <input type="number" name="cardNumber" id="cardNumber" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                    <label htmlFor="cardNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de tarjeta</label>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="relative z-0 w-full group col-span-1">
                        <input type="number" name="firstName" id="firstName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CVV</label>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <p className='col-span-1 flex items-center text-gray-500 text-xs text-center '>Vencimiento:</p>
                    </div>
                    <div className="relative z-0 w-full group">
                        <input type="number" name="lastName" id="lastName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mes</label>
                    </div>
                    <div className="relative z-0 w-full group">
                        <input type="number" name="lastName" id="lastName" className="input block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año</label>
                    </div>
                </div>

                <Link to={'/validation-software/validation'}>
                    <button type="submit" id='button-submit' className="text-white opacity-90 hover:opacity-100 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 focus:outline-none mt-8 transition-all">Iniciar sesión</button>
                </Link>
            </form>
        </div>
    );
}

export default PayForm;
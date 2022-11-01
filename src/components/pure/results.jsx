import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ pass }) => {
    return (
        <div className='w-full h-screen bg-black bg-opacity-50 fixed top-0 flex justify-center items-center'>
            <div className='modal-results py-10 px-7 rounded-lg'>
                {pass ?
                    <div className='flex justify-center flex-col text-center'>
                        <h1 className='mb-5'>Felicitaciones haz pasado la prueba</h1>
                        <p className='mb-5 text-white'>Te enviaremos un mail con la información correspondiente y la documentación</p>
                        <Link className='buttonLink mb-0' to={'/inicio'}>Volver al inicio</Link>
                    </div>
                    :
                    <div className='flex justify-center flex-col text-center'>
                        <h1 className='mb-5'>Lo sentimos no haz pasado la prueba</h1>
                        <p className='mb-5 text-white'>Te enviaremos un mail con la información correspondiente y la documentación</p>
                        <Link className='buttonLink mb-0' to={'/inicio'}>Volver al inicio</Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Results;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PresentationVideo = () => {

    const [viewVideo, setViewVideo] = useState(false);

    setTimeout(() => {
        setViewVideo(true)
    }, 10000);


    return (
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-white text-4xl text-center mb-2'>Introducción al curso</h1>
            <p className='text-white text-xl text-center mb-10'>Te dejamos un video introductorio para que puedas realizar el curso satisfactoriamente</p>
            <iframe className='video' src="https://www.youtube.com/embed/DWqEcJCAauM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            {viewVideo &&
                <Link className='buttonLink mt-10' to={'/validation-software/curso/test'}>Ir al curso</Link>}
        </div>
    );
}

export default PresentationVideo;

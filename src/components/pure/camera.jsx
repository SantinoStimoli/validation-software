import React from 'react';

const Camera = ({ videoRef, videoWidth, videoHeigth, handleVideo, canvasRef }) => {
    return (
        <div className='contenedor-video'>
            <video ref={videoRef} autoPlay muted width={videoWidth} height={videoHeigth} onPlay={handleVideo} />
            <canvas ref={canvasRef} className='absolute' />
        </div>
    );
}

export default Camera;

import * as faceapi from 'face-api.js';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CameraValidation from '../pure/cameraValidation';

const ValidationComponent = () => {

    const [initializing, setInitializing] = useState(false);
    const [validating, setValidating] = useState(true);
    const videoWidth = 600;
    const videoHeigth = 450;
    const videoRef = useRef();
    const canvasRef = useRef();
    let validate;

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models'
            setInitializing(true)

            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            ]).then(cargarCamara)
        }
        loadModels()
    }, []);

    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    const cargarCamara = () => {
        navigator.getMedia(
            {
                video: true,
                audio: false
            },
            stream => videoRef.current.srcObject = stream,
            console.error
        );
    };

    const handleVideo = () => {
        let interval = setInterval(async () => {
            if (initializing) {
                setInitializing(false)
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current)
            const size = {
                width: videoWidth,
                height: videoHeigth
            }
            faceapi.matchDimensions(canvasRef.current, size)
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = faceapi.resizeResults(detections, size)
            canvasRef.current.getContext('2d').clearRect(0, 0, size, size)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)



            if (detections.length === 1) {
                validate++
            } else {
                validate = 0
            }

            if (validate >= 100) {
                setValidating(false)
                clearInterval(interval)
            }

        }, 10);
    };

    return (
        <div className='flex flex-col justify-center'>
            <CameraValidation canvasRef={canvasRef} handleVideo={handleVideo} videoHeigth={videoHeigth} videoRef={videoRef} videoWidth={videoWidth} />

            {validating ?
                <div className='flex flex-col text-white text-center mt-5'>
                    <span>Espera unos segundos...</span>
                    <span>Estamos verificando tu identidad...</span>
                </div>

                : <div className='flex flex-col text-white text-center mt-5'>
                    <span>Validación completada!</span>
                    <span>Ya puedes iniciar sesión</span>
                    <Link className='buttonLink mt-10' to={'/validation-software/inicio'}>Iniciar sesión</Link>
                </div>}

        </div>
    );
}

export default ValidationComponent;

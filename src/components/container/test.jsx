import * as faceapi from 'face-api.js';
import React, { useEffect, useRef, useState } from 'react';
import Camera from '../pure/camera';

const Test = () => {

    const [initializing, setInitializing] = useState(false);
    const videoWidth = 720;
    const videoHeigth = 540;
    const videoRef = useRef();
    const canvasRef = useRef();

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
        setInterval(async () => {
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
        }, 1000);
    };


    return (
        <div>
            <Camera canvasRef={canvasRef} handleVideo={handleVideo} videoHeigth={videoHeigth} videoRef={videoRef} videoWidth={videoWidth} />
        </div>
    );
}

export default Test;

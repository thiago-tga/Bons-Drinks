import React from 'react';
import './nossoTime.css';
import Integrante1 from '../../Asserts/img/integrantes/Thiago.jpg';
import Integrante2 from '../../Asserts/img/integrantes/CarolinaAoki.jpg';
import Integrante3 from '../../Asserts/img/integrantes/MarinaLima.jpg';
import Integrante4 from '../../Asserts/img/integrantes/ViniciusCortes.jpg';

const NossoTime = () => {
    return (
        <div className='NossoGrid'>
            <h1 className='titleNossoTime'> Nosso Time </h1>
            <div className = 'integrante'>
                <img className='imgIntegrante' src={Integrante1}/>
                <div>
                    <h1 className='nameIntegante'> Thiago Araujo </h1>
                    <p className='textIntegrante'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
     
            </div>
            <div className = 'integrante'>
                <img className='imgIntegrante' src={Integrante2}/>
                <div>
                    <h1 className='nameIntegante'>Carolina Aoki</h1>
                    <p className='textIntegrante'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>            </div>
            <div className = 'integrante'>
                <img className='imgIntegrante' src={Integrante3}/>
                <div>
                    <h1 className='nameIntegante'>Marina Lima</h1>
                    <p className='textIntegrante'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className = 'integrante'>
                <img className='imgIntegrante' src={Integrante4}/>
                <div>
                    <h1 className='nameIntegante'>Vinicius Cortes</h1>
                    <p className='textIntegrante'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default NossoTime

import React from 'react';
import { Link } from 'react-router-dom';

import './Form.css';
import icon from './../../assets/asset-2.png';
import TermsConditions from '../TermsConditions/TermsConditions';


const Form = () => {
    return (
        <section className='form'>
            <h1>
                <span>Datos de usuario</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </h1>

            <div className="container">
                <div className="question">
                    <img src={icon} alt="" />
                    <label htmlFor="name">Ingresa tu nombre completo</label>
                    <input name='name' type="text" placeholder='Nombre'/>
                </div>

                <div className="question">
                    <img src={icon} alt="" />
                    <label htmlFor="name">Slecciona tu municipio</label>
                    <input type="range" name="" id="" />
                </div>

                <div className="age-sex">
                    <div className="">
                        <img src={icon} alt="" />
                        <label htmlFor="age">Ingresa tu edad</label>
                        <input type="text" name='' id=''/>
                    </div>

                    <div className="">
                        <img src={icon} alt="" />
                        <label htmlFor="age">Selecciona tu sexo</label>
                        <input type="text" name='' id=''/>
                    </div>
                </div>
            </div>
            
            <Link to="/"> Regresar </Link>
            <TermsConditions />
            
        </section>
    )
}

export default Form;
import React from 'react';
import Popup from 'reactjs-popup';

import './Form.css';
import TermsConditions from '../TermsConditions/TermsConditions';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


const Form = () => {
    return (
        <section className='form'>
            <h1>Datos de usuario</h1>

            <label htmlFor="name">Ingresa tu nombre completo</label>
            <input name='name' type="text" placeholder='Nombre'/>

            <label htmlFor="name">Slecciona tu municipio</label>
            <input type="range" name="" id="" />

            <div className="age-sex">
                <div className="">
                    <label htmlFor="age">Ingresa tu edad</label>
                    <input type="text" name='' id=''/>
                </div>

                <div className="">
                    <label htmlFor="age">Selecciona tu sexo</label>
                    <input type="text" name='' id=''/>
                </div>
            </div>
            
            <Link to="/"> Regresar </Link>
            <Popup 
                trigger={<button type='button'> Enviar Cuestionarioa</button>} 
                modal
                className='terms-button'
                >
            <TermsConditions />
            </Popup>
        </section>
    )
}

export default Form;
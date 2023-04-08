import React from 'react';
import Popup from 'reactjs-popup';

import './Form.css';
import TermsConditions from '../TermsConditions/TermsConditions';


const Form = () => {
    return (
        <div className='data-form'>
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
            
            <Popup 
                trigger={<button type='button'> Siguiente</button>} 
                modal
                className='terms-button'
                >
               <TermsConditions />
            </Popup>
            
        </div>
    )
}

export default Form;
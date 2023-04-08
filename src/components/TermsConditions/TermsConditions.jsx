import React from 'react';
import Popup from 'reactjs-popup';

import './TermsConditions.css';

const TermsConditions = () => {
    return(
        <Popup 
            trigger={<button type='button'> Enviar Cuestionario</button>} 
            modal
            className='terms-button'
        >
            <div className='terms-popup'>
                <h1>Terminos y Condiciones</h1>

                <p>La utilización de este sitio y de cualquiera de las aplicaciones del mismo constituye el pleno y expreso consentimiento por parte del usuario para observar y sujetarse respecto de cada uno de los términos y condiciones que aquí se contienen, así como respecto de las políticas de privacidad, políticas de seguridad y, en su caso, cualesquiera otros documentos que conformen parte o regulen la participación del usuario en este sitio. En el supuesto que cualquiera de los términos a los que habrá de sujetarse el usuario cuando acceda a este sitio sean contrarios a sus intereses, deberá abstenerse de hacer uso de este.</p>
                <br />
                <p>La utilización de este sitio y de cualquiera de las aplicaciones del mismo constituye el pleno y expreso consentimiento por parte del usuario para observar y sujetarse respecto de cada uno de los términos y condiciones que aquí se contienen, así como respecto de las políticas de privacidad, políticas de seguridad y, en su caso, cualesquiera otros documentos que conformen parte o regulen la participación del usuario en este sitio. En el supuesto que cualquiera de los términos a los que habrá de sujetarse el usuario cuando acceda a este sitio sean contrarios a sus intereses, deberá abstenerse de hacer uso de este.</p>

                <button type='button'> Más información </button>
                
                <div className='check'>
                    <input type="checkbox" name="accept" id="" />
                    <label htmlFor="accept">He leído y acepto los términos y condiciones</label>
                </div>

            </div>
        </Popup>
    )
}

export default TermsConditions;
import React from 'react';
import Popup from 'reactjs-popup';

import './Home.css';
import logo  from '../../assets/logo-1.png';
import logoOds  from '../../assets/logo-1.png';
import footerImg from '../../assets/asset-14.png';

const Home = () => {
    return (
        <section className='home'>

            <nav>
                <img src={logo} alt="Logo Gobierno de Hidalgo" />
                <img src={logoOds} alt="Logo ODS" />
            </nav>

            <div className="main">
                <p>
                    Queremos saber tu opinión acerca de la
                    comunidad y sus necesidades. Ayúdanos
                    llenando esta pequeña encuesta, los
                    grandes camios llegan con un primer paso.
                    ¡Se parte de esto!
                </p>

                <Popup trigger={<button> INICIAR ENCUESTA</button>} modal>
                    <h1>Popup content here !!</h1>
                </Popup>
            </div>

            <footer>
                <div className="bg-footer"></div>
            </footer>
        </section>
    )
}

export default Home;
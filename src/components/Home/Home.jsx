import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Home.css';
import logo  from '../../assets/logo-1.png';
import logoOds  from '../../assets/logo-1.png';

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

                <Link to='/form'> INICIAR ENCUESTA</Link>
            </div>

            <footer>
                <div className="bg-footer">.</div>
            </footer>
        </section>
    )
}

export default Home;
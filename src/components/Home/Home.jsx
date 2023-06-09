import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Home.css';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <section className='home'>
            <div className="main">
                <p>
                    Queremos saber tu opinión acerca de la
                    comunidad y sus necesidades. Ayúdanos
                    llenando esta pequeña encuesta, los
                    grandes camios llegan con un primer paso.
                    ¡Se parte de esto!
                </p>

                <Link to='/form' className='form-button'> 
                    <span>INICIAR ENCUESTA </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </div>           
        </section>
    )
}

export default Home;
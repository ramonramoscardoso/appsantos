import React from 'react';
import Escudo from '../src/assets/escudo.png'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Header(){
    return(
        <div className="header">
            <Link to="/"><img src={Escudo} alt="escudo" className="logo"/></Link>
            <section className="options">
                <Link to="/history">História</Link>
                <Link to="/professionals">Elenco</Link>
                <Link to="/matches">Partidas</Link>
                <Link to="/news">Todas as notícias</Link>

                <span className="social">Siga o PEIXÃO nas redes sociais: </span>
                    <a href="https://www.twitter.com/SantosFC" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} color="#00aced" size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/santosfc/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} color="#833AB4" size="2x"/>
                    </a>
                    <a href="https://pt-br.facebook.com/santosfc/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} color="#3b5998" size="2x"/>
                    </a>
                    <a href="https://www.youtube.com/user/santostvoficial" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} color="#FF0000" size="2x"/>
                    </a>
                <section className="aligntitle">
                    <span></span>
                </section>
            </section> 
        </div>
    )
};

export default Header;
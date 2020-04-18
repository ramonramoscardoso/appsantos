import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header';
import './styles.css';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';



export default function Professionals(){
    const [professionals, setProfessional] = useState([]);
    const [activeSection, setActiveSection] = useState(["none"]);

    // function changeIcon(){
    //     setIcon("faCaretUp");
    // }

    useEffect(() => {
        api.get("/professionals").then(response => {
            setProfessional(response.data);
        })
    }, []);


    const teste = React.useRef(11);

    const dropdownSection = () => {
        teste.current.style.backgroundColor = "yellow";
  };

    return(
        <div>
            <Header />
            <section className="professionals-container">
                <h2>Goleiros</h2>
                <ul>
                    {professionals.filter(professional => professional.type === "goleiro").map(professional => ((
                        <section className="card">
                           
                            <section className="container">
                                <li key={professional.id}>
                                <img src={`${professional.urlPicture}`} alt="professionalPicture"/>
                                    <span>#{professional.number}</span>
                                    <h3>{professional.name}</h3>
                                    <section className="dropdown" style={{display: activeSection}} >  
                                        <p>Teste 1</p>
                                    </section>
                                    <FontAwesomeIcon icon={faCaretDown} size="2x" ref={teste} style={{backgroundColor:"blue"}} color="white" onClick={dropdownSection}/>
                                    
                                </li>
                            </section>
                        </section>
                    )))}
                </ul>

                <h2>Defensores</h2>
                <ul>
                    {professionals.filter(professional => professional.type === "zagueiro").map(professional => ((
                        <section className="card">
                           
                            <section className="container">
                                <li key={professional.id}>
                                <img src={`${professional.urlPicture}`} alt="professionalPicture"/>
                                    <span>#{professional.number}</span>
                                    <h3>{professional.name}</h3>
                                </li>
                            </section>
                        </section>
                    )))}
                </ul>

                <h2>Meias</h2>
                <ul>
                    {professionals.filter(professional => professional.type === "meia").map(professional => ((
                        <section className="card">
                           
                            <section className="container">
                                <li key={professional.id}>
                                <img src={`${professional.urlPicture}`} alt="professionalPicture"/>
                                    <span>#{professional.number}</span>
                                    <h3>{professional.name}</h3>
                                </li>
                            </section>
                        </section>
                    )))}
                </ul>

                <h2>Atacantes</h2>
                <ul>
                    {professionals.filter(professional => professional.type === "atacante").map(professional => ((
                        <section className="card">
                           
                            <section className="container">
                                <li key={professional.id}>
                                <img src={`${professional.urlPicture}`} alt="professionalPicture"/>
                                    <span>#{professional.number}</span>
                                    <h3>{professional.name}</h3>
                                </li>
                            </section>
                        </section>
                    )))}
                </ul>

                <h2>Técnico</h2>
                <ul>
                    {professionals.filter(professional => professional.type === "tecnico").map(professional => ((
                        <section className="card">
                           
                            <section className="container">
                                <li key={professional.id}>
                                <img src={`${professional.urlPicture}`} alt="professionalPicture"/>
                                    <span>#{professional.number}</span>
                                    <h3>{professional.name}</h3>
                                </li>
                            </section>
                        </section>
                    )))}
                </ul>

            </section>
        </div>
    )
};

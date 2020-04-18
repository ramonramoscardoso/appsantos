import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header';
import './styles.css';
import api from '../../services/api';

export default function News(){
    const location = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        api.get(`/news/${location.id}`).then(response => {
            setNews(response.data);
        })
    }, []);

        console.log(news.text);

    return(
        <div>
            <Header />
            <section className="news-container">
                <section className="title">
                    <h1>{news.title}</h1>
                </section>

                <section className="subtitle">
                    <span>{news.subtitle}</span>
                </section>

                <section className="newsfont">
                    <span>Fonte da notícia: {news.fontNews}</span>
                </section>

                <section className="image">
                    <img src={`${news.urlImage}`} />
                </section>

                <section className="imagefont">
                    <span>Fonte da imagem: {news.fontImage}</span>
                </section>

                <section className="bodynews">
                    <span>{news.text}</span>
                </section>

            </section>
        </div>
    )
        };
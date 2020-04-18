import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import './styles.css';
import api from '../../services/api';

function Index(){
    const [news, setNews] = useState([]);
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        api.get('lastnews').then(response => {
            setLastNews(response.data.slice(0,1));
            setNews(response.data.slice(1, 9));
        })
    }, []);

    return(
        <div>
            <Header />
            <section className="allnews">
                <section className="lastnews">
                    <ul>
                        {lastNews.map( lastnews => ((
                            <Link to={`/news/${lastnews.id}`}>
                                <li key={lastnews.id} style={{ backgroundImage:`url('${lastnews.urlImage}')` }} >
                                    <p>{lastnews.title}</p>
                                </li>
                            </Link>
                        )))}
                    </ul>
                </section>
                <section className="fivenews">
                    <ul>
                        {news.map( news => ((
                            <section className="link">
                                <Link to={`/news/${news.id}`}>
                                    <li key={news.id}>
                                        <section className="linkbackground">
                                            <span>{news.title}</span>
                                        </section>
                                    </li>
                                </Link>
                            </section>
                        )))}
                    </ul>
                </section>
            </section>
        </div>
    )
};

export default Index;
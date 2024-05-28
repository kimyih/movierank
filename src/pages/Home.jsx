// src/pages/Home.jsx
import React from 'react';
import cgvImage from '../assets/img/cgv.jpg';
import cineqImage from '../assets/img/cineq.jpg';
import megaboxImage from '../assets/img/megabox.jpg';
import mvcImage from '../assets/img/mvc.jpg';
import seriesonImage from '../assets/img/serieson.jpg';
import bannerImage from '../assets/img/banner.jpg';
import MovieSection from '../components/MovieSection';

function HomePage() {
    return (
        <div className="Main__Movie">
            <h1>Movie Rank</h1>
            <div className='banner'>
                <img src={bannerImage} alt="banner" />
                <img src={bannerImage} alt="banner" />
                <img src={bannerImage} alt="banner" />
            </div>

            <div className='Cinema'>
                <a href="/megabox"><img src={megaboxImage} alt="megabox" /></a>
                <a href="/cineq"><img src={cineqImage} alt="cineq" /></a>
                <a href="/cgv"><img src={cgvImage} alt="cgv" /></a>
                <a href="/moviechart"><img src={mvcImage} alt="mvc" /></a>
                <a href="/serieson"><img src={seriesonImage} alt="serieson" /></a>
            </div>

            <MovieSection company="Megabox" title="Megabox" />
            <MovieSection company="CineQ" title="CineQ" />
            <MovieSection company="CGV" title="CGV" />
            <MovieSection company="Moviechart" title="Moviechart" />
            <MovieSection company="Serieson" title="Serieson" />
        </div>
    );
}

export default HomePage;

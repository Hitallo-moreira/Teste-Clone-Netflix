import React, { useEffect, useState } from 'react';
import Tmdb from './components/Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/Featured';
import Header from './components/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState ([]);
  const [featuredData, setFeaturedData] = useState (null);
  const [blackHeader, setBlackHeader] = useState (false);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o feature
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  

  return (
    <div className= "page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item = {featuredData} />
      }

      <section className = "lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        <p>Direitos de imagem para a Netflix</p>
        <p> Dados fornecidos pelo site Themoviedb.org</p>  
      </footer>
    </div>
  );
}
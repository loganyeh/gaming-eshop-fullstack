import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// comps
import HomePage from './pages/HomePage';
import GameInfoPage from './pages/GameInfoPage';
import SearchPage from './pages/SearchPage';
import Wishlist from './pages/Wishlist';
import Layout from './layout/Layout';

// api
import { fetchGames, fetchID } from './api/rawg';
import { fetchAListOfGames } from './api/rawg';

  // types
import type { GamesObject } from './api/rawg';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [listOfGames, setListOfGames] = useState<GamesObject[]>([]);
  const [gameIdClick, setGameIdClick] = useState<number>(654);
  const [gameInfoData, setGameInfoData] = useState<GamesObject | null>(null);
  const [defaultListOfGames, setDefaultListOfGames] = useState<GamesObject[]>([]);

  // for listOfGames
  useEffect(() => {
    const timeout = setTimeout(() => {
      async function getGames(){
        const data = await fetchGames(searchQuery);
        setListOfGames(data);
        // console.log(data.slice(0, 6));
      };

      if (searchQuery) getGames();

    }, 1000);
    // change number back down to limit api requests

    return () => clearTimeout(timeout);
  }, [searchQuery]); 

  // for gameIdClick
  useEffect(() => {
    async function getId(){
      const data = await fetchID(gameIdClick);
      setGameInfoData(data);
    }

    getId();
  }, [gameIdClick]);

  // default list of games
  useEffect(() => {
    async function getAListOfGames(){
        const data = await fetchAListOfGames();
        setDefaultListOfGames(data);

        return data;
    };

    getAListOfGames();
}, []);


  return (
    <>
      <Routes>
        <Route element={<Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} listOfGames={listOfGames} setGameIdClick={setGameIdClick} />}>
          <Route path='/' element={<HomePage defaultListOfGames={defaultListOfGames} setGameIdClick={setGameIdClick} />} />
          <Route path='/game' element={<GameInfoPage gameInfoData={gameInfoData} />} />
          <Route path='/search' element={<SearchPage listOfGames={listOfGames} setGameIdClick={setGameIdClick} defaultListOfGames={defaultListOfGames} />} />
          <Route path='/wishlist' element={<Wishlist setGameIdClick={setGameIdClick} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

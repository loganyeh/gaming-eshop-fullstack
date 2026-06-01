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
import type { WishlistSchemaProp } from './pages/Wishlist';

function App() {
  const [loading, setLoading] = useState(true);
  const [defaultGamesLoading, setDefaultGamesLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [listOfGames, setListOfGames] = useState<GamesObject[]>([]);
  const [gameIdClick, setGameIdClick] = useState<number>(654);
  const [gameInfoData, setGameInfoData] = useState<GamesObject | null>(null);
  const [defaultListOfGames, setDefaultListOfGames] = useState<GamesObject[]>([]);
  const [wishlistData, setWishlistData] = useState<WishlistSchemaProp[]>([]);

  // for listOfGames
  useEffect(() => {
    const timeout = setTimeout(() => {
      async function getGames(){
        setLoading(true);
        try {
          const data = await fetchGames(searchQuery);
          setListOfGames(data ?? []);
          // console.log(data.slice(0, 6));
        } catch (error) {
          console.error(`Data failed to load:`, error);
        } finally {
          setLoading(false);
        }
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
        setDefaultGamesLoading(true);

        const data = await fetchAListOfGames();
        setDefaultListOfGames(data);

        setDefaultGamesLoading(false);

        return data;
    };

    getAListOfGames();
}, []);

  return (
    <>
      <Routes>
        <Route element={<Layout loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery} listOfGames={listOfGames} setGameIdClick={setGameIdClick} />}>
          <Route path='/' element={<HomePage defaultListOfGames={defaultListOfGames} setGameIdClick={setGameIdClick} wishlistData={wishlistData} defaultGamesLoading={defaultGamesLoading} />} />
          {gameInfoData && <Route path='/game' element={<GameInfoPage gameInfoData={gameInfoData} wishlistData={wishlistData} />} />}
          <Route path='/search' element={<SearchPage listOfGames={listOfGames} setGameIdClick={setGameIdClick} defaultListOfGames={defaultListOfGames} wishlistData={wishlistData} />} />
          <Route path='/wishlist' element={<Wishlist setGameIdClick={setGameIdClick} wishlistData={wishlistData} setWishlistData={setWishlistData} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
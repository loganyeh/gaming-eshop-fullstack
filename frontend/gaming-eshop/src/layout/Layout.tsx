// state 
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// comps
import Header from "../components/HomePageComponents/Header";
import Footer from "../components/HomePageComponents/Footer";
import BottomNav from "../components/NavComponents/BottomNav";
import PopUpSearch from "../components/NavComponents/PopUpSearch";

// data
import { navButtons } from "../data/NavData/NavData";
import { headerData } from "../data/HomePageData/headerData";
import { footerData } from "../data/HomePageData/FooterData";

// type
import type { GamesObject } from "../api/rawg";

type LayoutProps = {
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  listOfGames: GamesObject[],
  setGameIdClick: React.Dispatch<React.SetStateAction<number>>,
};

function Layout({ searchQuery, setSearchQuery, listOfGames, setGameIdClick }: LayoutProps ){
  const navigate = useNavigate();
  const [isSearchPopUp, setIsSearchPopUp] = useState(false);
  useEffect(() => {
      if (isSearchPopUp) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isSearchPopUp]);

  function handleNavClick(action: string){
      if(action === "search"){
        setIsSearchPopUp(true);
      } 
      if(action === "wishlist"){
        navigate("/wishlist");
      }
      else{
        console.log(`clicked ${action}`)
      }
  };

  return(
    <>  
      <Header data={headerData} handleNavClick={handleNavClick} />
      <BottomNav data={navButtons} handleNavClick={handleNavClick} />
      <PopUpSearch isSearchPopUp={isSearchPopUp} setIsSearchPopUp={setIsSearchPopUp} 
      searchQuery={searchQuery} setSearchQuery={setSearchQuery} listOfGames={listOfGames}
      setGameIdClick={setGameIdClick} />

      <Outlet />

      <Footer data={footerData} />
    </>
  );
};

export default Layout;
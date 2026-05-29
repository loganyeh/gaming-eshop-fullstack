const API_KEY = "98cbf69e366348d6b54d6db7481687f2";
let game_query = "mario";

// FETCH GAMES EXPORT DATA --------------------
type GamesDataObject = {
    results: GamesObject[],
};

export type GamesObject = {
    id: number,
    background_image: string,
    name: string,
    released: string,
    description_raw: string,
};

export async function fetchGames(query: string){
    const res = await fetch(`https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`);
    const data: GamesDataObject = await res.json();
    return data.results; 
};

// FETCH ID EXPORT DATA --------------------
export async function fetchID(id: number){
    const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    const data: GamesObject = await res.json();
    return data; 
};

// FETCH GET A LIST OF GAMES
export async function fetchAListOfGames(){
    const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
    const data: GamesDataObject = await res.json();

    return data.results;
};
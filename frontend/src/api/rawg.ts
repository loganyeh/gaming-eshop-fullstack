const API_KEY = "98cbf69e366348d6b54d6db7481687f2";

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
    try {
        const res = await fetch(`https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`);

        if (!res.ok) {
            throw new Error(`Fetching to fetch games`);
        }

        const data: GamesDataObject = await res.json();
        return data.results; 
        
    } catch (error) {
        console.error(`Error fetching games:`, error);
    };
};

// FETCH ID EXPORT DATA --------------------
export async function fetchID(id: number){
    try {
        const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

        if (!res.ok) {
            throw new Error(`Failed to to fetch game details by ID`);
        };

        const data: GamesObject = await res.json();
        return data; 
        
    } catch (error) {
        console.error(`Error fetching ID:`, error);
    };
};

// FETCH GET A LIST OF GAMES
export async function fetchAListOfGames(){
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch game list`);
        };
        
        const data: GamesDataObject = await res.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching List of Games:`, error);
    };
};
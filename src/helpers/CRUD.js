


export const getDate = async (endpoint, limit, name) => {


    if (limit!=0) {
        const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}?limit=${limit}`);
        const pokemons = response.json();
        return pokemons;
    }
    if (name) {
        const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}/${name}`);
        const pokemons = response.json();
        
        return pokemons;
    }
}
import { Home } from '../components/Home'


import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import { PokemonCard } from "../components/PokemonCard";

describe('Pruebas al Componente Home', () => {

    test('Debe mostrarse correctamente las tarjetas de pokemons', () => {

        const pokemon = {
            name:'bulbasaur',
            url:'https://pokeapi.co/api/v2/pokemon/1/'

        }

        render(<PokemonCard name={pokemon.name} url={pokemon.url} />);
        const poke = screen.getByTestId("pokemoncard"); 
        expect(poke).toBeInTheDocument(); 





    })

})
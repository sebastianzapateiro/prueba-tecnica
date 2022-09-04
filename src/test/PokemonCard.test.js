import { render, screen } from '@testing-library/react';
import { PokemonCard } from '../components/PokemonCard';

describe('Prueba de componenete PokemonCard', () => {

    const nombre = "ivysaur"
    const url1 = "https://pokeapi.co/api/v2/pokemon/2/"

    const elemento = render(<PokemonCard name={nombre} url={url1} />);

    test('Test para validar la obtención de datos API para tarjeta pokemon', () => {
        const linkElement = screen.getByText(nombre);
        expect(linkElement).toBeInTheDocument();
    })
})
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getDate } from '../helpers/CRUD';


function PokemonCard(props) {

    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {

        async function getData() {
            try {
                const data = await getDate('pokemon', '0', props.name);
                setPokemon(data);

            } catch (e) {
                
            }
        }

        getData();

    }, [])

    const { id, types } = pokemon;
    console.log(id);


    return (

        <Card style={{ width: '16.3rem' }}>
             <Card.Img variant="top" src={pokemon.sprites?.other.dream_world.front_default} />  
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>

                    Id: {id}
                   
                     {pokemon.types?.map((tipo,llave)=>(
                             <p> Tipo: {tipo.type.name}</p>
                            
                    ))} 

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default PokemonCard
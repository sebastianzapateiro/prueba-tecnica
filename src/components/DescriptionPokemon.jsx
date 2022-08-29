
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getDate } from '../helpers/CRUD';

function DescriptionPokemon() {

  const [pokemonDatosS, setPokemonDatosS] = useState([]);
  const [pokemonDatos, setPokemonDatos] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState([]);
  let { name } = useParams();

  async function getData() {
    try {
      const data = await getDate('pokemon', '0', name);
      setPokemonDatos(data);
      console.log(data);
    } catch (e) {

    }
  }

  async function getDataS() {
    try {
      const datae = await getDate('pokemon-species', '0', name);
      setPokemonDatosS(datae);
      console.log(datae)
    } catch (e) {

    }
  }


  useEffect(() => {
    getDataS();
    getData();




  }, [])




  return (
    <Container className='mt-5'>
      <div className='d-flex justify-content-center flex-wrap mb-4'>
        #{name}
        <span> {pokemonDatos?.name}</span>
      </div>
      <Row>
        <Col>
          <img src={pokemonDatos.sprites?.other.dream_world.front_default} alt="Bulbasaur" />
        </Col>
        <Col>
          <div className='d-flex flex-column'>
            <p className='description-pokemon'>
              Desde que nace, crece alimentándose de los nutrientes que contiene la semilla de su lomo.

            </p>

            <div><span>Tipos: </span>
              {pokemonDatos.types?.map((tipo, llave) => (
                <span key={llave} >{tipo.type.name}&nbsp;</span>
              ))
              }
            </div>
            <div><span>Altura: </span><span>{pokemonDatos?.height}</span></div>
            <div><span>Peso: </span><span>{pokemonDatos?.weight}</span></div>
            <div><span>Abilidades: </span>{pokemonDatos.abilities?.map((tipo, llave) => (
              <span key={llave} >{tipo.ability.name}&nbsp;</span>
            ))
            }</div>
            <div><span>Grupo de huevos: </span><span>

              {pokemonDatosS.egg_groups?.map((tipo, llave) => (
                <span key={llave} >{tipo.name}&nbsp;</span>
              ))
              }
            </span></div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DescriptionPokemon
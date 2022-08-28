
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import InputSearch from './InputSearch';
import { getDate } from '../helpers/CRUD';


function Home() {

  const [datePokemon, setDatePokemon] = useState([]);
  useEffect(() => {

    async function getData() {
      try {
        const data = await getDate('pokemon', '10');
        setDatePokemon(data.results);
        

      } catch (e) {
        console.log(e);
      }
    }

    getData();

  }, [])

  return (
    <>

      <NavBar />

      <Container className='mt-5'>

        <InputSearch />

        <div className='gap-4 d-flex flex-wrap  justify-content-center'>

          {
            datePokemon.map((value, llave) => (
              
              <PokemonCard key={llave} name ={value.name} url = {value.url} />
            ))
          }
        </div>
      </Container>

    </>
  )
}

export default Home
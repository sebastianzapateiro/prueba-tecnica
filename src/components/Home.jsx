
import React, { useEffect, useRef, useState } from 'react'
import PokemonCard from './PokemonCard'
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';

import { getDate } from '../helpers/CRUD';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Home() {

  const [datePokemon, setDatePokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [wsearchPokemon, setWSearchPokemon] = useState('');
  const filtro = useRef('');


  const searchApi = () => {

    setSearchPokemon(filtro.current.value);
  }
  const firestore = () => {

  }

  useEffect(() => {

    async function getData() {

      let valueGet = 10;
      let data;

      if (searchPokemon.length >= 3 && wsearchPokemon == 'searchApi') {
        valueGet = 600;
      }



      try {

        if (searchPokemon.length >= 3 && wsearchPokemon == 'searchApi') {


          data = await getDate('pokemon', valueGet);

          setDatePokemon(data.results.filter(({ name }) => name.includes(searchPokemon)));
        }
        else {
          const data = await getDate('pokemon', valueGet);
          setDatePokemon(data.results);
        }

      } catch (e) {
        console.log(e);
      }
    }

    getData();


  }, [searchPokemon])



  return (
    <>

      <NavBar />

      <Container className='mt-5'>


        <InputGroup className="my-4">
          <Form.Control onChange={(e) => setSearchPokemon(e.target.value)} aria-label="Text input with dropdown button" placeholder='Search by filter' />

          <DropdownButton
            variant="outline-secondary"
            title="Origin"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#" onClick={() => setWSearchPokemon('searchApi')}>Pokemon API</Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => setWSearchPokemon('firestore')}>Firestore</Dropdown.Item>
          </DropdownButton>
        </InputGroup>

        <div className='gap-4 d-flex flex-wrap  justify-content-center'>

          {
            datePokemon.map((value, llave) => (

              <PokemonCard key={llave} name={value.name} url={value.url} />
            ))
          }
        </div>
      </Container>

    </>
  )
}

export default Home
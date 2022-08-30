

import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore";

function PokemonCardF(props) {
  return (
    <Card style={{ width: '16.3rem' }}>
      <Card.Img className='img-pokemon p-2' variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='name-pokemon'>{props.nombre}</Card.Title>
        <Card.Text>
          <p><span>Id: </span>{props.id}</p>
          <p>{props.evolucion}</p>
          <p>
            {props.tipo}
          </p>

        </Card.Text>
        <div className='text-center mt-4'><Link to={'/pokemon-f/' + props.id}><Button variant="primary">Ver pokemon!</Button></Link></div>

      </Card.Body>
    </Card>
  )
}

export default PokemonCardF
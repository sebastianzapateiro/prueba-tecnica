

import React from 'react'
import { Card } from 'react-bootstrap'

function PokemonCardF(props) {
  return (
    <Card style={{ width: '16.3rem' }}>
    <Card.Img className='img-pokemon p-2' variant="top" src={props.image} />
    <Card.Body>
        <Card.Title className='name-pokemon'>{props.nombre}</Card.Title>
        <Card.Text>


            <p><span>Id: </span>{props.id}</p>
            <p>{props.evolucion1}  {props.evolucion2}</p>
            <p>
            {props.tipo1} {props.tipo2}
            </p>

        </Card.Text>

    </Card.Body>
</Card>
  )
}

export default PokemonCardF
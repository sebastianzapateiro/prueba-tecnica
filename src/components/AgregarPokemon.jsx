
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../Hooks/useForm';
import { actionAddAgendaAsync} from '../redux/actions/actionAgendar';
import React from 'react'
import NavBar from './NavBar';

function AgregarPokemon() {

    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        abilidad:'',
        altura:'',
        egg:'',
        evolucion:'',
        id_pokemon:'',
        imagen:'',
        peso:'',
        tipo:'',

        
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(actionAddAgendaAsync(formValue))
        reset()
    }

    return (
        <>

        <NavBar/>
        <Form onSubmit={handleSubmit} style={{ margin: '5%', marginLeft: '10%', marginRight: '10%' }}>
                <h1 style={{ textAlign: 'center', color: 'blue' }}>Agregar pokemon</h1>
                <hr />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nombre del pokemon</Form.Label>
                    <Form.Control type="text" name="nombre" value={formValue.nombre} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Abilidad del pokemon</Form.Label>
                    <Form.Control type="text" name="abilidad" value={formValue.abilidad} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Altura del pokemon</Form.Label>
                    <Form.Control type="text" name="altura" value={formValue.altura} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Egg group del pokemon</Form.Label>
                    <Form.Control type="text" name="egg" value={formValue.egg} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Evolución del pokemon</Form.Label>
                    <Form.Control type="text" name="evolucion" value={formValue.evolucion} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Id del pokemon</Form.Label>
                    <Form.Control type="text" name="id_pokemon" value={formValue.id_pokemon} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Imagen del pokemon</Form.Label>
                    <Form.Control type="text" name="imagen" value={formValue.imagen} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Peso del pokemon</Form.Label>
                    <Form.Control type="text" name="peso" value={formValue.peso} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tipo del pokemon</Form.Label>
                    <Form.Control type="text" name="tipo" value={formValue.tipo} onChange={handleInputChange} />
                </Form.Group>
                <Button type="submit" variant="info" >Agendar</Button>
            </Form>
            </> 
    )
}

export default AgregarPokemon
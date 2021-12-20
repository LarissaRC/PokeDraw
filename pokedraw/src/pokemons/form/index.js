import React, {useState} from 'react';
import "./style.css";

const initialState = {
    id: '',
    name: '',
    description: '',
    link: '',
    img_url: ''
 }
const Form = (props) => {
    const [fields, setFields] = useState(initialState);
    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPokemon(fields);
        event.preventDefault(); /* Evitar o recarregamento */
        setFields(initialState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <br/>
                    <label htmlFor="id">Pokedex number: </label>
                    <input id="id" type="id" name="id" value={fields.id} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <br/>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <br/>
                    <label htmlFor="description">Description: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <br/>
                    <label htmlFor="link">Saiba mais(link): </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}></input>
                </div>
                <div>
                    <br/>
                    <label htmlFor="img_url">Imagem(link): </label>
                    <input id="img_url" type="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <button className="submit" type="submit">Add</button>
                <br/><br/>
            </form>
        </div>
    )
}

export default Form;
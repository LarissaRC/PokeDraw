import PokeImg from "../../shared/poke_img";
import PokeDescLink from "../../shared/description_link/link_desc";
import "./style.css";
import React, {useState, useEffect} from "react";
import Form from './form';

async function getTypes(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Pokemon = (props) => {

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes(props.id).then(data => {
            setTypes(data['types']); /* Pegar do JSON */
        })
    }, []) /* Roda apenas na inicialização, e não em cada update */
    
    const addType = (new_type) => {
        setTypes([...types, new_type])
    }

    return(
        <div class="pode-div">
            <h4>{props.name}</h4>
            <PokeDescLink link={props.link}
                          description={props.description} />
            <br/>
            <PokeImg img_url={props.img_url}/>
            <h3>Types</h3>
            <ul>
                {types.map((type, index) =>
                <li key={index} className={type.type}>{type.type}</li>
                )}
            </ul>
            <Form addType={addType}/>
            <hr/>
        </div>
    )
}

export default Pokemon;
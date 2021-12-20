import PokeImg from "../../shared/poke_img";
import PokeDescLink from "../../shared/description_link/link_desc";
import "./style.css";
import React from "react";

const Pokemon = (props) => {
    
    return(
        <div class="pode-div">
            <h4>{props.name}</h4>
            <PokeDescLink link={props.link}
                          description={props.description} />
            <br/>
            <PokeImg img_url={props.img_url}/>
            <h3>Types</h3>
            <ul>
                {props.types.map((n) =>
                <   li className={n}>{n}</li>
                )}
            </ul>
            <hr/>
        </div>
    )
}

export default Pokemon;
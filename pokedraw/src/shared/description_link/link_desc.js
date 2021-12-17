import { Fragment } from "react";
import "./style.css";

const PokeDescLink = (props) => {
    var desc = props.description;

    if(!props.description)
        desc = "Descrição a ser adicionada!";

    return(
        <Fragment>
            <p>{desc}</p>
            <a class={props.link ? "btn-active" : "btn-inactive"} href={props.link} target="_blank">Saiba mais</a>
        </Fragment>
    )
}

export default PokeDescLink;
import { Fragment } from "react";
import "./style.css";

const PokeImg = (props) => {
    return(
        <Fragment>
            <img className="img-poke" alt="Pokemon" src={props.img_url}/>
        </Fragment>
    )
}

export default PokeImg;
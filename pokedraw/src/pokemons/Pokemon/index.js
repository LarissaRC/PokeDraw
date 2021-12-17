import PokeImg from "../../shared/poke_img";
import PokeDescLink from "../../shared/description_link/link_desc";
import "./style.css";

const Pokemon = (props) => {
    return(
        <div class="pode-div" onClick={() => props.clickOnPoke(props.name, props.capturado)}>
            <h4>{props.name}</h4>
            <PokeDescLink link={props.link}
                          description={props.description} />
            <br/>
            <PokeImg img_url={props.img_url}/>
        </div>
    )
}

export default Pokemon;
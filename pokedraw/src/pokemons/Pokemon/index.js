import PokeImg from "../../shared/poke_img";
import PokeDescLink from "../../shared/description_link/link_desc";
import "./style.css";
import React from "react";

class Pokemon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: []
        }
    }
    
    render(){
        return(
            <div class="pode-div" onClick={() => this.clickOnPoke(this.name, this.capturado)}>
                <h4>{this.name}</h4>
                <PokeDescLink link={this.link}
                                description={this.description} />
                <br/>
                <PokeImg img_url={this.img_url}/>
                <h3>Types</h3>
                <ul>
                    {this.types.map((n) =>
                    <   li className={n}>{n}</li>
                    )}
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Pokemon;
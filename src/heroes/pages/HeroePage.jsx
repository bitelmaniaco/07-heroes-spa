import { useMemo } from "react";
import { useParams, Navigate, useNavigate} from "react-router-dom";
import { getHereoById } from "../helpers";


export const HeroePage = () => {

    //para evitar dispararse x cada llamada

    const { id } = useParams();
    const navegador = useNavigate();

    const heroe = useMemo( () => getHereoById( id ), [ id ] ); 
    
    //console.log('ide: ', id );

    const volverBoton = () => {
        navegador(-1);
    }


    if( !heroe ){
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4"> 
                <img 
                    src={ `/assets/heroes/${ id }.jpg` }
                    alt={ heroe.superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{ heroe.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> { heroe.alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher: </b> { heroe.publisher } </li>
                    <li className="list-group-item"> <b>Primera aparicion: </b> { heroe.first_appearance } </li>
                </ul>

                <h5 className="mt-3">Caracteres: <p>{ heroe.characters }</p></h5>
            </div>
            <button 
                className="btn btn-outline-primary"
                onClick={ volverBoton }
            >
                Volver
            </button>
        </div>
    )
}

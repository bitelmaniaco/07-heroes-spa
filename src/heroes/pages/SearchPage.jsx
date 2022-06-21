import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; //instalado como terceros


import { useForm } from '../../hooks/useForm';
import { HeroeTarjeta } from '../components';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

    const navegador = useNavigate();
    const localizacion = useLocation();

    const { q = '' } = queryString.parse( localizacion.search );

    const heroes = getHeroesByName( q );
    
    const mostrarBusqueda = (q.length === 0);
    const mostrarError = (q.length > 0) && heroes.length === 0;

    // console.log('SeachPage q: ', q);
    // console.log('SeachPage heroes: ', heroes);

    const { textoAbuscar,  anteCambios} = useForm({
        textoAbuscar: q
    });

    const enBusqueda = (event) => {
        event.preventDefault();
        if( textoAbuscar.trim().length <= 1 ){ return; }

        navegador(`?q=${ textoAbuscar }`);
    }

    return (
        <>
            <h1> Busqueda </h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> A buscar... </h4>
                    <hr />
                    <form onSubmit={ enBusqueda }>
                        <input  
                            type="text"
                            placeholder="Buscar heroes"
                            className="form-control"
                            name="textoAbuscar"
                            autoComplete="off"
                            value={ textoAbuscar }
                            onChange={ anteCambios }
                        >
                        </input>
                        <button className="btn btn-outline-primary mt-1">
                            BUSCAR
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4> Resultados </h4>
                    <hr />
                    {
                        // ( q === '' )
                        // ? <div className="alert alert-primary">busqueda del heroe</div>
                        // : ( heroes.length === 0 ) && <div className="alert alert-danger">sin heroes llamados <b> { q } </b></div>
                    }

                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: mostrarBusqueda ? '' : 'none' }}
                    >
                        busqueda del heroe
                    </div>
                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: mostrarError ? '' : 'none' }}
                    >
                        sin heroes llamados <b> { q } </b>
                    </div>

                    {
                        heroes.map( heroe => (
                            <HeroeTarjeta key={ heroe.id } {...heroe} />
                        ))
                    /* <HeroeTarjeta /> */
                    }

                </div>
            </div>
            
        </>
    )
}

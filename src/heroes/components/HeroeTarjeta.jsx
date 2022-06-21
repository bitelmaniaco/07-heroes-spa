import { Link } from "react-router-dom";

//componente solamente usado aqui

const PersonajesPorHeroe = ({ real, personaje }) => {
    // if( real === personaje ) return (<></>);
    // return <p>{ real }</p>;
    return ( real === personaje )
        ? <></>
        : <p>{ real }</p>;
}


export const HeroeTarjeta = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const imgURL = `/assets/heroes/${ id }.jpg`;

    // console.log('HeroeTarjeta id: ', id );
    // const personajes = ( <p>{characters}</p>);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ imgURL } className="card-img" alt={ superhero }/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            {
                                // (alter_ego !== characters) && personajes
                                // (alter_ego !== characters) && ( <p>{characters}</p> )
                            }
                                <PersonajesPorHeroe real={ characters } personaje= { alter_ego } />
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/heroe/${ id }`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

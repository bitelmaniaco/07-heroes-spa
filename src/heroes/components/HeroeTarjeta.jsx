import { Link } from "react-router-dom";


export const HeroeTarjeta = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const imgURL = `/assets/heroes/${ id }.jpg`;

    const imaURL = ``;

    return (
        <div className="col">
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
                                (alter_ego !== characters) && ( <p>{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={`/heroe`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

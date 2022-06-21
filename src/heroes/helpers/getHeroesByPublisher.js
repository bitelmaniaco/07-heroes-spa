
import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publicador ) => {

    const valoresValidos = ['DC Comics', 'Marvel Comics'];
    if( !valoresValidos.includes(publicador)){
        throw new Error(`${publicador} no es valido `);
    }
    return heroes.filter( heroe => heroe.publisher === publicador );
}
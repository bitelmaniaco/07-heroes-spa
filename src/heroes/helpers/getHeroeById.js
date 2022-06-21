import { heroes } from "../data/heroes"

export const getHereoById = ( id ) => {

    //console.log('getHereoById, el id es: ', id);

    return heroes.find( heroE => heroE.id === id );

}
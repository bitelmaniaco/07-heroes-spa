import { heroes } from "../data/heroes";


export const getHeroesByName = ( nombre = '' ) => {
    //limpiamos
    nombre = nombre.toLocaleLowerCase().trim();
    // console.log('getHeroesByName nombre: ', nombre);
    //validamos
    if( nombre.length === 0 ) return [];
    //filtramos
    return heroes.filter( 
        heroe => heroe.superhero.toLocaleLowerCase().includes( nombre )
        );
}

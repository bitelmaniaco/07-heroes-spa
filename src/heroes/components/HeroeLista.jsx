import  { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroeTarjeta } from './';

export const HeroeLista = ({ publicador }) => {

    //evitar mas llamadas usamos useMemo
    const arrayHeroes = useMemo(() => getHeroesByPublisher(publicador), [ publicador ]);

    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g3'>
                {
                  arrayHeroes.map( heroe => (
                        <HeroeTarjeta 
                            key={ heroe.id }
                            { ...heroe }
                        />
                  ))
                }
            </div>
        </>
    )
}

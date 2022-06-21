import React from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroeTarjeta } from './';

export const HeroeLista = ({ publicador }) => {

    const arrayHeroes = getHeroesByPublisher(publicador);

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

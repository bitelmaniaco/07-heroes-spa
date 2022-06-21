import { Routes, Route, Navigate } from "react-router-dom";



import { Navegador, Search } from '../../ui';
// import { Search } from "../../ui/pages/Search";
import { MarvelPage, DcPage, Heroe } from '../pages';
// import { Heroe } from "../pages/Heroe";

export const HeroesRutas = () => {
    return (
        <>
        
            <Navegador />

            <div className="container">
                <Routes>               
                    <Route path="marvel"  element={ <MarvelPage /> } />
                    <Route path="dc"  element={ <DcPage /> } />
                    <Route path="busqueda"  element={ <Search /> } />
                    <Route path="heroe"  element={ <Heroe /> } />
                    <Route path="/" element={ <Navigate to="/marvel" /> } />
                </Routes>
            </div>
        </>
    )
}

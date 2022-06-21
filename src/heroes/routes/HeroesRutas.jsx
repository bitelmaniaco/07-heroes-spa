import { Routes, Route, Navigate } from "react-router-dom";



import { Navegador  } from '../../ui';
// import { Search } from "../../ui/pages/Search";
import { MarvelPage, DcPage, HeroePage, SearchPage } from '../pages';
// import { Heroe } from "../pages/Heroe";

export const HeroesRutas = () => {
    return (
        <>
            <Navegador />

            <div className="container">
                <Routes>               
                    <Route path="marvel"  element={ <MarvelPage /> } />
                    <Route path="dc"  element={ <DcPage /> } />
                    <Route path="busqueda"  element={ <SearchPage /> } />
                    <Route path="heroe/:id"  element={ <HeroePage /> } />
                    <Route path="/" element={ <Navigate to="/marvel" /> } />
                </Routes>
            </div>
        </>
    )
}

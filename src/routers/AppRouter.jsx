// Router principal
import React from 'react';
import { Routes, Route } from "react-router-dom";

import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRutas } from '../heroes/routes/HeroesRutas';

export const AppRouter = () => {
    return (
        <>
            <Routes>               
                {/* <Route path="marvel"  element={ <MarvelPage /> } />
                <Route path="dc"  element={ <DcPage /> } /> */}
                <Route path="login" element={ <LoginPage /> } />
                
                <Route path="/*" element={ <HeroesRutas /> } />

                {/* <Route path="/" element={ <Navigate to="/login" /> } /> */}
            </Routes>
        </>
    )
}

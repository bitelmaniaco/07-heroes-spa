import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navegador = () => {

    const navegante = useNavigate();

    const pilloLogOut = () => {
        navegante('/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/heroe"
                    >
                        Heroe
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/busqueda"
                    >
                        Buscar
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                    <span className='nav-item nav-link text-info'> 
                        Miguel
                    </span>
                    <button 
                        className='nav-item nav-link btn'
                        onClick={ pilloLogOut }
                        >
                            Deslogueo
                    </button>

                </ul>
            </div>
        </nav>
    )
}
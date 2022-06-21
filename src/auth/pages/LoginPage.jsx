import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navegador = useNavigate();   

    const pilloLogin = () => {
        navegador('/',{
            replace: true //borra el historial de navegacion
        });
    }

    return (
        <div className="container mt-5">
            <h1> Logueandose </h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ pilloLogin }
                > 
                    Loguerase 
            </button>
        </div>
    )
}

import { Link } from "react-router-dom";

const Navegacion = () => {
    return ( 
        <aside className="sidebar col-3">
            <h2>Navigation</h2>
            <nav className="navegacion">
                <Link to={"/registerCrop"} className="clientes">Crop Registration</Link>
                <Link to={"/analysisCropP"} className="productos">Precipitation</Link>
                <Link to={"/analysisCropD"} className="productos">Droughts</Link>
            </nav>
        </aside> 
    );
}
 
export default Navegacion;


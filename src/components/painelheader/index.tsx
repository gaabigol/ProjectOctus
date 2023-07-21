import { Link } from "react-router-dom";

export function PainelHeader(){
    return(
        <div 
            className="w-full items-center flex h-10 bg-red-500 rounded-lg text-white font-medium gap-4 px-4 mb-4">
            <Link to="/">
                Dashboard
            </Link>
            <Link to="/new">
                Cadastrar Produto
            </Link>

        </div>
    )
}
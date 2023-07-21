import { Link } from "react-router-dom";

export function PainelHeader(){
    return(
        <div 
            className="w-full items-center flex h-10 bg-red-500 rounded-lg text-white font-medium gap-4 px-4 mb-4">
            <Link to="/dashboard">
                Dashboard
            </Link>
            <Link to="/dashboard/new">
                Cadastrar Produto
            </Link>

            <button className="ml-auto">
                Sair da conta
            </button>
        </div>
    )
}
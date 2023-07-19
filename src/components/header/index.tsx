import { Link } from 'react-router-dom'
import { FiUser, FiLogIn} from 'react-icons/fi'

export function Header(){
    const signed = false;
    const loadingAuth = false;

    return(

        <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
            <head className=" flex w-full max-w 7xl items center justify-between px-4 mx-auto">
                <Link to="/">
                    Octus LLC
                </Link>

                { !loadingAuth && signed && (
                    <Link to="/dashboard">
                        <FiUser size={24} color="#000"></FiUser>
                    </Link>
                )}

                { !loadingAuth && !signed && (
                    <Link to="/dashboard">
                        <FiLogIn size={24} color="#000"></FiLogIn>
                    </Link>
                )}
            </head>
        </div>
    )
}
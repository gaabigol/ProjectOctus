import { Link } from 'react-router-dom'
import { FiLogIn} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export function Header(){
    const nav = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        nav('/');
      }
   
    return(
        <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
            <head className=" flex w-full max-w 7xl items center justify-between px-4 mx-auto">
                <Link to="/dashboard" className="font-bold">
                <p>OCTUS LLC</p>
                </Link>
                <button onClick={handleLogout}>
                    <FiLogIn size={24} color="#000"></FiLogIn>
                </button>
            </head>
        </div>
    )
}
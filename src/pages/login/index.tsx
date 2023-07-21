import { Container } from "../../components/container";
import { Link } from 'react-router-dom';
import { FormEvent, useState } from "react";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";


//Criar Validação quando tiver tempo!!!
export function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        try {
            const user: User = await authenticate(username, password);
            localStorage.setItem('token', user.token);
            console.log("Usuário autenticado: ", user);
            nav('/dashboard');
          } catch (err) {
            console.log("Erro durante a autenticação: ", err);
          }
        }
    
    async function authenticate(username: string, password: string): Promise<User>{
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        });
      
        if (!response.ok) {
          throw new Error('Falha na autenticação');
        }
        const data: any = response.json();
      
        return data as User;
      }
    return(
        <Container>
            <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
                <Link to="/">
                    <p className="w-full mb-6 max-w-sm w-full items-center">OCTUS LLC</p>
                </Link>
            
                <form onSubmit={handleSubmit}//
                    className="bg-white max-w-xl w-full rounded-lg p-4"
                    >
                    <div className="mb-3">
                        <input
                            className="w-full border-2 rounded-md h-11 px-2"
                            placeholder="Digite o nome de usuário"            
                            type="text"
                            name="username"
                            value={username}
                            onChange={ (e) => setUsername(e.target.value)}
                        />
                    </div>
                   
                    <div className="mb-3">
                        <input
                            className="w-full border-2 rounded-md h-11 px-2"
                            placeholder="Digite sua senha"            
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                   
                   
                     <button type="submit" className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium">
                            Acessar
                    </button>
                </form>
            </div>
        </Container>
    )
    
}
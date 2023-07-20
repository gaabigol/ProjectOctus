import { Container } from "../../components/container";
import { Link } from 'react-router-dom';
import { FormEvent, useState } from "react";
import { User } from "../../types/user";



export function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        try {
            const user: User = await authenticate(username, password);
            localStorage.setItem('user', JSON.stringify(user));
            console.log("Usuário autenticado: ", user);
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
                <Link to="/" className="mb-6 max-w-sm w-full">
                    <p className="w-full">OCTUS LLC</p>
                </Link>
            
                <form onSubmit={handleSubmit}//verificar error
                    className="bg-white max-w-xl w-full rounded-lg p-4"
                    >
                    <div className="mb-3">
                        <input 
                            placeholder="Digite o nome de usuário"            
                            type="text"
                            name="username"
                            value={username}
                            onChange={ (e) => setUsername(e.target.value)}
                        />
                    </div>
                   
                    <div className="mb-3">
                        <input
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
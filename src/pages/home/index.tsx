import { Container } from "../../components/container";

export function Home(){
    return(
        <Container>
            <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center gap-2">
                <input 
                    className="w-full border-2 rounded-lg h-9 px-3"
                    placeholder="Digite o nome do produto..."
                />
                <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
                    Buscar
                </button>
            </section>

            <h1 className="font-bold text-center mt-6 text-2xl mb-4">
                Inovação e evolução é só na OCTUS LLC
            </h1>
            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                <section className="w-full bg-white rounded-lg">
                    <img
                        className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transtition-all" 
                        src="https://images.unsplash.com/photo-1688870559348-bfbad318db1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2045&q=80" 
                        alt="Product"/>
                    <p className="font-bold mt-1 mb-2 px-2">Title</p>
                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-06">Description</span>
                        <strong className="text-black font-medium text-xl">price</strong>
                    </div>
                    <div className="w-full h-px bg-slate-200 my-2"></div>
                    <div className="px-2 pb-2">
                        <span className="text-black">
                        Categoria
                        </span>
                    </div>
                </section>

            </main>
        </Container>
    )
}
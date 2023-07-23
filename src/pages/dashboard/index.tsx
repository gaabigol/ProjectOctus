import { Container } from "../../components/container";
import { useState, useEffect } from "react";
import { PainelHeader } from "../../components/painelheader";
import { Link } from "react-router-dom";


interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  description: string;
  images: string[];
  isDeleted?: boolean;
}

export function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getProducts();
  }, []);

  //pega todos os produtos e renderiza
  function getProducts() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data: { products: Product[] }) => {
        //console.log("Data from API:", data);
        setProducts(data.products); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error', error);
        setLoading(false);
      });
  }


  function handleSearch() {
    if (searchTerm.trim() === "") {
      // Se o campo de busca estiver vazio, não fazemos a busca
      return;
    }
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error', error);
        setLoading(false);
      });
  }

  function deleteProduct(id: number) {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(deletedProduct => {
      console.log("Product deleted:", deletedProduct);
      // Atualiza o estado para remover o produto deletado
      setProducts(products.filter(product => product.id !== id));
    })
    .catch(error => {
      console.error("Error deleting product:", error);
    });
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(products)) {
    return <div>Error: Products data is not an array.</div>;
  }



  return (
    <Container>
        <PainelHeader></PainelHeader>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3"
          placeholder="Digite o nome do produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Inovação e evolução é só na OCTUS LLC
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <section key={product.id} className="w-full bg-white rounded-lg">
             <Link to={`/product/${product.id}`}>
              <img
                className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transtition-all"
                src={product.thumbnail}
                alt={product.title}
              />
            </Link>
            <p className="font-bold mt-1 mb-2 px-2">{product.title}</p>
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-06">{product.description}</span>
              <strong className="text-black font-medium text-xl">{ Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(product.price)}</strong>
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="px-2 pb-2">
              <span className="text-black">{product.category}</span>
              <Link to={`/update/${product.id}`}>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded-md">
                  Atualizar
                </button>
              </Link>
              <button 
                className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md"
                onClick={() => deleteProduct(product.id)}
                >
                  Deletar
              </button>
            </div>
          </section>
        ))}
      </main>
    </Container>
  
  );
  }
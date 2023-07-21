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
}

export function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

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
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Inovação e evolução é só na OCTUS LLC
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <section key={product.id} className="w-full bg-white rounded-lg">
            <Link to="/product">
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
            </div>
          </section>
        ))}
      </main>
    </Container>
  );
}
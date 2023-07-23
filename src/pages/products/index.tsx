import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { useState, useEffect } from 'react';

interface FormData {
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  description: string;
}

export function ProductsDetais(){
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    description: "",
  });
  const { productId } = useParams<{ productId: string }>();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then((data: FormData)=> {
      setFormData({
        title: data.title,
        price: data.price,
        discountPercentage: data.discountPercentage,
        rating: data.rating,
        stock: data.stock,
        brand: data.brand,
        category: data.category,
        thumbnail: data.thumbnail,
        description: data.description
      });
    })
    .catch(error => console.error("Error:", error));
  }, [productId]);



    return(
        <Container>
              <section className="w-full bg-white rounded-lg">
              <img
                className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transtition-all"
                src={formData.thumbnail}
                />
            <p className="font-bold mt-1 mb-2 px-2">{formData.title}</p>
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-06">{formData.description}</span>
              <strong className="text-black font-medium text-xl">{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(formData.price)}</strong>
              <span>Desconto: {formData.discountPercentage} %</span>
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="px-2 pb-2">
              <span className="text-black">Marca: {formData.brand}</span>
            </div>
          </section>
      </Container>
    )
}
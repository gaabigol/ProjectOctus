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
              <div className="max-w-lg rounded overflow-hidden shadow-lg">
                <img 
                   src={formData.thumbnail}
                   alt={formData.title}
                  className="w-full"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{formData.title}</div>
                  <p className="text-gray-700 text-base">{formData.description}</p>
                  <strong>{ Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(formData.price)}</strong>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{formData.brand}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Avaliação {formData.rating}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Desconto: {formData.discountPercentage} %
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Stock: {formData.stock} 
                  </span>
                </div>
             </div>
      </Container>
    )
}
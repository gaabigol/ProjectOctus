import { FiUpload } from "react-icons/fi";
import { FormEvent, useState } from "react";
import { Container } from "../../../components/container"
import { useParams } from "react-router-dom";

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

//página para atualizar os produtos

export function UpdateProduct() {
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


  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!productId) {
      console.error("Product ID is undefined");
      return; 
    }
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedProduct = await response.json() as FormData; 
      console.log("Product updated:", updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

    return (
      <Container>
        <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
          <button
            className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-dray-600 h-32 md:w-48"
          >
            <div className="absolute cursor-pointer">
              <FiUpload size={30} color="#000" />
            </div>
            <div className="cursor-pointer">
             <input type="file" accept="image/*" className="opacity-0 cursor-pointer" />
            </div>
          </button>
        </div>
  
        <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="mb-2">
                <p className="mb-2 font-medium">Nome do Produto</p>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Digite o nome do produto"
                  className="w-full sm:w-48"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Preço</p>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  placeholder="Preço"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Desconto</p>
                <input
                  type="number"
                  name="discountPercentage"
                  value={formData.discountPercentage}
                  onChange={(e) => setFormData({ ...formData, discountPercentage: parseInt(e.target.value) })}
                  placeholder="Desconto"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Avaliação</p>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value)})}
                  placeholder="Avaliação"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Quantidade em stock</p>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                  placeholder="stock"
                  className="w-full sm:w-48"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="mb-2">
                <p className="mb-2 font-medium">Marca</p>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  placeholder="Marca do produto"
                  className="w-full sm:w-48"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Categoria</p>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Categoria"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Miniatura</p>
                <input
                  type="text"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  placeholder="Miniatura"
                  className="w-full sm:w-32"
                />
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium">Descrição</p>
              <textarea
                className="border-2 w-full rounded-md h-24 px-2"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Digite a descrição de produto"
                typeof="text"
              ></textarea>
            </div>
            <button type="submit" className="w-full rounded-md bg-zinc-900 text-white font-medium h-10">
              Atualizar
            </button>
          </form>
        </div>
      </Container>
    );
  }
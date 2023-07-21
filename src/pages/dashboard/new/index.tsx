import { FiUpload } from "react-icons/fi";
import { Container } from "../../../components/container"
import { PainelHeader } from '../../../components/painelheader/index';

export function NewProduct() {
    return (
      <Container>
        <PainelHeader></PainelHeader>
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
          <form className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="mb-2">
                <p className="mb-2 font-medium">Nome do Produto</p>
                <input
                  type="text"
                  name="title"
                  placeholder="Digite o nome do produto"
                  className="w-full sm:w-48"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Preço</p>
                <input
                  type="number"
                  name="price"
                  placeholder="Preço"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Desconto</p>
                <input
                  type="number"
                  name="discountPercentage"
                  placeholder="Desconto"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Avaliação</p>
                <input
                  type="number"
                  name="rating"
                  placeholder="Avaliação"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Quantidade em stock</p>
                <input
                  type="number"
                  name="stock"
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
                  placeholder="Marca do produto"
                  className="w-full sm:w-48"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Categoria</p>
                <input
                  type="text"
                  name="category"
                  placeholder="Categoria"
                  className="w-full sm:w-32"
                />
              </div>
              <div className="mb-2">
                <p className="mb-2 font-medium">Miniatura</p>
                <input
                  type="text"
                  name="thumbnail"
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
                placeholder="Digite a descrição de produto"
                typeof="text"
              ></textarea>
            </div>
            <button type="submit" className="w-full rounded-md bg-zinc-900 text-white font-medium h-10">
              Cadastrar
            </button>
          </form>
        </div>
      </Container>
    );
  }
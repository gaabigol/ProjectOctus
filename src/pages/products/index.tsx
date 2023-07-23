import { Container } from "../../components/container";


export function ProductsDetais(){
    return(
        <Container>
              <section className="w-full bg-white rounded-lg">
              <img
                className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transtition-all"/>
            <p className="font-bold mt-1 mb-2 px-2">title</p>
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-06">product.description</span>
              <strong className="text-black font-medium text-xl">valor</strong>
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="px-2 pb-2">
              <span className="text-black">category</span>
            </div>
          </section>
      </Container>
    )
}
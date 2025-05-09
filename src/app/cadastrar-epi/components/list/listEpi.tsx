import { ListaEpi } from "../../data/dataEpi";
import { Epi } from "../../data/dataEpi";

export function ListEpi() {
  return (
    <table className="w-full divide-y-2 divide-gray-300">
      <thead className="bg-blue-50 font-bold">
        {ListaEpi.map((titulo, index) => {
          return (
            <tr key={index} className="">
              <td className="px-3 py-1">{titulo.tituloEpi}</td>
              <td className="px-3 py-1">{titulo.tituloPreco}</td>
              <td className="px-3 py-1">{titulo.tituloTamanho}</td>
            </tr>
          );
        })}
      </thead>
      <tbody className="divide-y divide-gray-300 ">
      {Epi.map((dados, index) => {
          return (
            <tr key={index} className="">
              <td className="px-3 py-1">{dados.epi}</td>
              <td className="px-3 py-1">{dados.preco}</td>
              <td className="px-3 py-1">{dados.tamanho}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

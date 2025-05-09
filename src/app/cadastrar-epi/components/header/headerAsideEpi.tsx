import { Button } from "@/app/cadastrar-epi/components/outros/button";
import { headerInputEpi } from "@/app/cadastrar-epi/types/header-inputs";
import {Select} from "@/app/cadastrar-epi/components/outros/select"

export const HeaderAsideEpi = () => {
  return (
    <div className="h-full flex flex-col ">
      <section className="border-t-2 border-gray-300 ">
        <div className="flex justify-between border-t-2 border-blue-300 p-3 ">
          <h3>Cadastro EPI</h3>;
          <Button />
        </div>
        <form className="flex border-t border-gray-300 p-3 gap-2 ">
          {headerInputEpi.map((subTitulo, id) => {
            return (
              <input
                key={id}
                placeholder={subTitulo.placeholder}
                type={subTitulo.type}
                name={subTitulo.name}
                id={subTitulo.id}
                className="bg-white px-3 rounded-md border border-blue-400 w-full"
              />
            );
          })}
          <select className="bg-white px-3 rounded-md border border-blue-400 w-full">
            {Select.map((selecao, id) => {
              return (
                <option key={id} value=''>{selecao.option}</option>
              )
            })}
          </select>
       
        </form>
      </section>
    </div>
  );
};

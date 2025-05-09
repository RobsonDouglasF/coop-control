import { HeaderAsideEpi } from "@/app/cadastrar-epi/components/header/headerAsideEpi";
import { ListEpi } from "../list/listEpi";

export function FormView() {
  return (
    <div className="">
      <HeaderAsideEpi/>  
      <div className=" border-t-2 border-gray-300 max-h-80 overflow-y-auto">
        <ListEpi />
      </div>
     
     
    </div>
  );
}

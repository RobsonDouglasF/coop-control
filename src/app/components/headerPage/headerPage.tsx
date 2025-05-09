import Image from "next/image";
import { Button } from "../button";

export const Header = () => {
  return (
    <header className="bg-gray-100 w-full flex justify-between px-5 py-2 items-center shadow-lg">
      <div className="flex gap-2 w-full ">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full bg-white px-3 rounded-md border border-blue-400 max-w-2/3"
        />
        <Button>Pesquisar</Button>
      </div>
      <Image
        className="cursor-pointer"
        src="/perfil.png"
        alt="Avatar"
        width={30}
        height={30}
      />
    </header>
  );
};

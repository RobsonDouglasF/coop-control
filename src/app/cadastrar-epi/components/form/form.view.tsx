export function AddEpiForm() {
  return (
    <form className="flex flex-col gap-2 max-w-2/3 mx-auto">
      <input
        placeholder="Nome do EPI"
        type="text"
        name="name"
        id="name"
        className="bg-white px-3 rounded-md border border-blue-400 w-full"
      />
      <input
        placeholder="Preço"
        type="number"
        name="price"
        id="price"
        className="bg-white px-3 rounded-md border border-blue-400 w-full"
      />
      <select className="bg-white px-3 rounded-md border border-blue-400 w-full">
        <option value="">Selecione um tamanho</option>
        <option value="P">Pequeno</option>
        <option value="M">Médio</option>
        <option value="G">Grande</option>
      </select>

      <button className="bg-green-600 px-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-200">
        Cadastrrar
      </button>
    </form>
  );
}

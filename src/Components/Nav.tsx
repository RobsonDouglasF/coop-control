export const Nav = () => {
    return (
        <aside className="bg-white w-44 h-full shadow-lg">
            <h1 className="border-b border-gray-300 py-2 text-center text-2xl text-gray-500 shadow-lg">COOP</h1>
            <button className="p-8 w-full border-b text-sm border-gray-300 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 ">Consultar</button>
            <button className="p-8 w-full border-b text-sm border-gray-300 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 ">Adicionar</button>
            <button className="p-8 w-full border-b text-sm border-gray-300 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 ">Cadastrar Coop</button>
            <button className="p-8 w-full border-b text-sm border-gray-300 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 ">Cadastrar EPI</button>
            <button className="p-8 w-full border-b text-sm border-gray-300 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 ">Outro</button>
        </aside>
    )
}
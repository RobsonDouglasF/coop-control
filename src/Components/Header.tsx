import Image from 'next/image';

export const Header = () => {

    return (
        <header className="bg-gray-100 w-full flex justify-between px-5 py-2 items-center shadow-lg">
            <div className="flex gap-2 w-2xl ">
                <input type="text" placeholder="Buscar" className='w-full bg-white px-3 rounded-md border border-blue-400'/>
                <button className='bg-green-600 px-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-200'>Pesquisar</button>
            </div>
            <Image className='cursor-pointer'
                src='/perfil.png'
                alt='Avatar'
                width={30}
                height={30}            
            />
        
        </header>
    )
}
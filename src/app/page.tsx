import { Nav } from "@/Components/Nav";
import { Header } from "@/Components/Header";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-200 p-8">
      <main className="bg-gray-300 w-full rounded-md p-8 flex shadow-2xl">
        <div className="w-full flex rounded-sm overflow-hidden p-4 bg-gray-200 shadow-lg">         
          <div className="">
            <Nav />
          </div>
          <div className="w-full">          
            <Header />
          </div>
        </div>

      </main>
    </div>
  );
}

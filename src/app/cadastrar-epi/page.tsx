import { Button } from "../components";
import { Form } from "./components/form";
import { List } from "./components/list";

export default function CadastrarEPIPage() {
  return (
    <section className="border-t-2 border-gray-300 ">
      <div className="flex justify-between border-t-2 border-blue-300 p-3 ">
        <h3>Cadastro EPI</h3>
        <Button>Cadastrar</Button>
      </div>
      <Form />
      <List />
    </section>
  );
}

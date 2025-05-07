import { AddEpiForm } from "./components/form/form.view";
import { ListEpi } from "./components/list/list.view";

export default function CadastrarEPIPage() {
  return (
    <>
      <AddEpiForm />

      <section className="max-w-2/3 mx-auto mt-10">
        <h2 className="text-center font-bold mb-5">Lista de EPIs</h2>

        <ListEpi />
      </section>
    </>
  );
}

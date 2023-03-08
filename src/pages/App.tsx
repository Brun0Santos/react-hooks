import { useState } from "react";
import Cronometro from "../components/cronometro/Cronometro";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import style from "./App.module.scss";
import { ITarefas } from "../types/ITarefas";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefa={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;

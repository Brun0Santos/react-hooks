import { ITarefas } from "../../types/ITarefas";
import Botao from "../botao/Botao";
import style from "./Formulario.module.scss";
import { useState } from "react";

export default function Formulario(prop: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarElemento(e: React.FormEvent) {
    e.preventDefault();
    prop.setTarefas((tarefasAntigas) => [...tarefasAntigas, { tarefa, tempo }]);
    setTarefa("");
    setTempo("");
    console.log(tarefa, tempo);
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarElemento}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          placeholder="O que você deseja estudar? "
          required
          onChange={(e) => setTarefa(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step={1}
          name="tempo"
          id="tempo"
          value={tempo}
          min={"00:00:00"}
          max={"01:30:00"}
          required
          onChange={(e) => setTempo(e.target.value)}
        />
      </div>
      <Botao texto="Adicionar" botao="submit" />
    </form>
  );
}

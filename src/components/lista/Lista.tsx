import { ITarefas } from "../../types/ITarefas";
import style from "./Lista.module.scss";
import Item from "./item/Item";

export default function Lista(props: { tarefa: Array<ITarefas> }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {props.tarefa.map((item, index) => (
          <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}

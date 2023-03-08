import style from "./Botao.module.scss";

function Botao(prop: {
  texto: string;
  botao?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button type={prop.botao} className={style.botao}>
      {prop.texto}
    </button>
  );
}

export default Botao;

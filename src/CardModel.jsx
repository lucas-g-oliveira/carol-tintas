import { useState } from "react";
import { setMostUsed, setQtd } from "./storageFunctions/storagefunctions";

export default function CardModel({ props }) {
  const { code, name, img, qtd, filter, frequecyUsed } = props;

  const [unidades, setUnidades] = useState(qtd);

  const handlerSet = ({ target: { name } }, code) => {
    let nextValue = 0;
    if (name === "add") {
      nextValue = unidades + 1;
      setUnidades(nextValue);
      setQtd(code, nextValue);
    } else if (name === "del" && unidades > 0) {
      nextValue = unidades - 1;
      setUnidades(nextValue);
      setQtd(code, nextValue);
      setMostUsed(code, filter);
    }
  };
  return (
    <div className="card-model">
      <img className="hair" src={img} alt={code} />
      <div className="infos">
        <h5 className="name-color">{`${code} - ${name}`}</h5>
        <h5 className="qtd">{`Qtd: ${unidades}`}</h5>
      </div>
      {filter !== "most-used" ? (
        <div className="number-control">
          <button name="del" onClick={(event) => handlerSet(event, code)}>
            -
          </button>
          <button name="add" onClick={(event) => handlerSet(event, code)}>
            +
          </button>
        </div>
      ) : (
        <h2 className="frequency">{frequecyUsed}</h2>
      )}
    </div>
  );
}

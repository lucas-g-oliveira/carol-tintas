function HeadFilter(props) {
  const { filter, setFilter } = props.parentState;

  const handlerFilter = (name) => {
    if (filter !== name) {
      setFilter(name);
    }
  };

  return (
    <div className="head-filter">
      <h3
        className={"storage" === filter ? "selected" : "no"}
        onClick={()=>handlerFilter("storage")}
      >
        Em estoque
      </h3>
      <h3
        className={"catalog" === filter ? "selected" : "no"}
        onClick={()=>handlerFilter("catalog")}
      >
        Catalogo
      </h3>
      <h3
        className={"most-used" === filter ? "selected" : "no"}
        onClick={()=>handlerFilter("most-used")}
      >
        Mais Usados
      </h3>
    </div>
  );
}

export default HeadFilter;

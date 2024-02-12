import React, { useEffect, useState } from "react";
import Datas from "../data/d1.json";

function Filter() {
  const [names, setNames] = useState([]);
  const [selectName, setSelectName] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    const exNames = Datas.map((e) => e.name)
    setNames(exNames)
  };

  return (
    <div>
      <select onChange={(e) => setSelectName(e.target.value)}>
        {names.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;

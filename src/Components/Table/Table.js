import React, { useState } from "react";
import "./styles.css";
import data_table from "../../data/data";
import DTheadRender from "../../ui-kit/DTheadRender";
import DTbodyRender from "../../ui-kit/DTbodyRender";

const Table = () => {
  const data = JSON.parse(data_table);

  // Стейт сортировки
  // [
  //   индекс колонны,
  //   направление (true -> по возрастанию, false -> по убыванию)
  // ]
  const [sort, editSort] = useState([0, true]);
  const [text, editText] = useState("");

  const handleSort = (index) => {
    if (sort[0] === index) {
      editSort([sort[0], !sort[1]]);
    } else {
      editSort([index, true]);
    }
  };

  const handleText = (event) => {
    editText(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Искать по совпадению"
        value={text}
        onInput={handleText}
      />
      <table cellPadding={0} cellSpacing={5}>
        <thead>
          <DTheadRender data={data.head} sort={sort} handleSort={handleSort} />
        </thead>
        <tbody>
          <DTbodyRender
            data={data.items}
            search={text}
            thead={data.head}
            sort={sort}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;

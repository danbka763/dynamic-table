import React, { useState } from "react";
import "./styles.css";
import data_table from "../../data/data";

const TheadRender = ({ data, sort, handleSort }) => {
  return (
    <tr>
      {data.map((item, i) => (
        <th key={i} onClick={() => handleSort(i)}>
          {item[0]}
          {i === sort[0] && <i className={sort[1] ? "down" : "up"} />}
        </th>
      ))}
    </tr>
  );
};

const TbodyRender = ({ data, search, thead, sort }) => {
  data.sort((item1, item2) => {
    if (thead[sort[0]][1] === "number") {
      return sort[1]
        ? item1[sort[0]] - item2[sort[0]]
        : item2[sort[0]] - item1[sort[0]];
    }

    if (thead[sort[0]][1] === "string") {
      return sort[1]
        ? item1[sort[0]].localeCompare(item2[sort[0]])
        : item2[sort[0]].localeCompare(item1[sort[0]]);
    }
  });

  return data.map((line, i) => {
    let ok = !search;
    if (!ok) {
      for (let item of line) {
        if (String(item).toLowerCase().indexOf(search.toLowerCase()) > -1) {
          ok = true;
          break;
        }
      }
    }
    return ok ? (
      <tr key={i}>
        {line.map((item, i) => (
          <td key={i}>{item}</td>
        ))}
      </tr>
    ) : (
      false
    );
  });
};

const Table = () => {
  const [data] = useState(JSON.parse(data_table));
  const [text, editText] = useState("");
  const [sort, editSort] = useState([0, true]);

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
          <TheadRender data={data.head} sort={sort} handleSort={handleSort} />
        </thead>
        <tbody>
          <TbodyRender
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

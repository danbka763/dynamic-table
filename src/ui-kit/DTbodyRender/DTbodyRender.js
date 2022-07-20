import React from "react";
import { coincidence } from "../../helpers/coincidence";

const DTbodyRender = (props) => {
  const { data, search, thead, sort } = props;

  data.sort((item1, item2) => {
    if (thead[sort[0]][1] === "number") {
      return sort[1]
        ? item1[sort[0]] - item2[sort[0]]
        : item2[sort[0]] - item1[sort[0]];
    } else if (thead[sort[0]][1] === "string") {
      return sort[1]
        ? item1[sort[0]].localeCompare(item2[sort[0]])
        : item2[sort[0]].localeCompare(item1[sort[0]]);
    } else {
      return 0;
    }
  });

  return data.map((line, i) => {
    let ok = !search;
    if (!ok) {
      ok = coincidence(
        line,
        search.replace(/[^a-zа-яё0-9\s]/gi, " ").split(" ")
      );
    }
    return (
      ok && (
        <tr key={i}>
          {line.map((item, i) => (
            <td key={i}>{item}</td>
          ))}
        </tr>
      )
    );
  });
};

export default DTbodyRender;

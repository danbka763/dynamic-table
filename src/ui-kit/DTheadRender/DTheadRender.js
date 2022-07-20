import React from "react";

const DTheadRender = (props) => {
  const { data, sort, handleSort } = props;

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

export default DTheadRender;

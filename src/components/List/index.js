import React from "react";
import "./style.scss";

export default function List({ list }) {
  return (
    <>
      <h3 className="list-title">{list.title}</h3>
      <ul className="list">
        {list.items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              <p>{item.name}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

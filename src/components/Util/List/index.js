import React from "react";
import "./style.scss";

export default function List({ list }) {
  return (
    <div className="list-wrapper">
      {list.title ? <h3 className="list-title">{list.title}</h3> : null}
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
    </div>
  );
}

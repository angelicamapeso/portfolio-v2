import React from "react";

function LinkList(props) {
  return (
    <ul class="text-list">
      {props.items.map(item => (
        <li>
          <a className="icon-link" href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;

import React from "react";
import { pageLinks } from "../data";
function PageLinks({ parentClass, itemClass }) {
  return (
    <div>
      <ul className={parentClass} id="nav-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;

          return (
            <li key={id}>
              <a href={href} className={itemClass}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PageLinks;

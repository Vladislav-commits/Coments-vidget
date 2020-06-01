import React from "react";
import CommentDesign from "./CommentDesign.js";

function CommentsList(props) {
  let prop = JSON.parse(localStorage.getItem("comments"));

  return (
    <ul>
      {prop.map((item, idx) => {
        if (item == null) {
          return false;
        } else {
          return (
            <li>
              <CommentDesign
                iNeedIt={props}
                obj={item}
                key={idx.toString()}
                hey={idx.toString()}
              />
            </li>
          );
        }
      })}
    </ul>
  );
}
export default CommentsList;

import React from "react";

function CommentDesign(props) {
  function remove() {
    props.iNeedIt.needed(props.hey);
  }
  return (
    <div className="task-container">
      <article className="article">
        <h2 className="article-header">
          <button onClick={remove} className="cross" />
          {props.obj.name}
        </h2>
        <p className="article-paragraph">{props.obj.comment}</p>
        <div className="time">{props.obj.time}</div>
      </article>
    </div>
  );
}

export default CommentDesign;

import React from "react";

function FormDesign(props) {
  function changeState(e) {
    e.preventDefault();
    let commentObject = {
      name: document.querySelector(".input").value,
      comment: document.querySelector(".textarea").value,
      time: `${new Date().toLocaleTimeString()}, ${new Date().toLocaleDateString()}`
    };
    props.addNewCommentProp(commentObject);
    document.querySelector(".input").value = "";
    document.querySelector(".textarea").value = "";
  }

  return (
    <form onSubmit={changeState} className="form">
      <label>Имя</label>
      <input className="input" required="true" type="text" />
      <label>Комментарий</label>
      <textarea required="true" className="textarea" />
      <input type="submit" className="button" value="Опубликовать" />
    </form>
  );
}
export default FormDesign;

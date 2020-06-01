import React from "react";
import ReactDOM from "react-dom";
import CommentsList from "./CommentsList.js";
import FormDesign from "./FormDesign.js";

if (localStorage.getItem("comments") == null) {
  localStorage.setItem("comments", JSON.stringify([]));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("comments"));
    this.AddNewComment = this.AddNewComment.bind(this);
    this.RemoveComment = this.RemoveComment.bind(this);
    this.SetState = this.SetState.bind(this);
  }
  AddNewComment(prop) {
    let lastState = JSON.parse(localStorage.getItem("comments"));
    lastState.push(prop);
    localStorage.setItem("comments", JSON.stringify(lastState));
    this.SetState();
  }
  RemoveComment(ololo) {
    let lastState = JSON.parse(localStorage.getItem("comments"));
    delete lastState[Number(ololo)];
    lastState.filter(() => true);
    let bool = false;
    lastState.forEach(item => {
      if (item == null) bool = true;
    });
    console.log(bool);
    let emptyArray = [];
    if (bool == true) {
      localStorage.setItem("comments", JSON.stringify(emptyArray));
    } else {
      localStorage.setItem("comments", JSON.stringify(lastState));
    }

    this.SetState();
  }

  SetState() {
    this.setState(JSON.parse(localStorage.getItem("comments")));
  }
  render() {
    return (
      <div>
        <CommentsList needed={this.RemoveComment} />
        <FormDesign addNewCommentProp={this.AddNewComment} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("form"));

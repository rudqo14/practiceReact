import React, { useState } from "react";
import "./App.scss";

function App() {
  let [title] = useState(["일상 생활", "개발 서적", "알고리즘"]);
  let [like, setLike] = useState(0);
  
  const likeHandler = () => {
    setLike(like+1);
  }

  return (
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      <div className="boardList">
        <h3>{title[0]}<span onClick={ ()=> { likeHandler(); } } >👍</span></h3>
        <p>4월 22일 발행</p>
        <hr />
      </div>
      <div className="boardList">
        <h3>{title[1]}</h3>
        <p>내용</p>
        <hr />
      </div>
      <div className="boardList">
        <h3>{title[2]}</h3>
        <p>내용</p>
        <hr />
      </div>
    </div>
  );
}

export default App;

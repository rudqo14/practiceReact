import React, { useState } from 'react';
import './App.scss';

function App() {
  let [title] = useState(["KeyoungBae's Blog","나의 블로그"]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="title-list">
      <h3> { title[0] } </h3>
      <p>4월 22일 발행</p>
      <hr/>
      </div>
      <div>
        <div className="boardList">
          <div className="boardTitleContainer">
            <p className="boardTitle">게시판 제목</p>
            <p className="boardContent">내용</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

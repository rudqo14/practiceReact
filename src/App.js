import React, { useState } from "react";
import "./App.scss";

function App() {
  let [title, setTitle] = useState([
    "일상 생활",
    "개발 서적",
    "알고리즘",
  ]);
  let [likeBtn, setLikeBtn] = useState(0);

  const likeHandler = () => {
    setLikeBtn(likeBtn + 1);
  };
  const firstTitleHandler = () => {
    const newArray = [...title];
    title[0] === "일상 생활" ? (newArray[0] = "나의 이야기") : (newArray[0] = "일상 생활");
    setTitle (newArray);
    /*5Array, Object state 데이터 수정 방법(그냥 카피할 경우 값 공유만)
    -변경함수를 사용함(대체할 데이터)
    -State는 직적 변경하지 않는다.
    -deepCopy를 사용하여 수정*/
  };

  return (
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      <div className="boardList">
        <button
          onClick={() => {
            firstTitleHandler();
          }}
        >
          버튼
        </button>
        <h3>
          {title[0] + "   "}
          <button
            className="likeBtn"
            onClick={() => {
              likeHandler();
            }}
          >
            👍
          </button>
          {"   " + likeBtn}
        </h3>
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

import React, { useState } from "react";
import "./Styles/App.scss";

function App() {
  let [title, setTitle] = useState(["일상 생활", "개발 서적", "알고리즘"]);
  let [likeBtn, setLikeBtn] = useState([0, 2, 1]);
  let [modal, setModal] = useState(false);
  let [clickTitle, setClickTitle] = useState(0);

  let [input, setInput] = useState("");

  const firstTitleHandler = () => {
    const newArray = [...title];
    title[0] === "일상 생활"
      ? (newArray[0] = "나의 이야기")
      : (newArray[0] = "일상 생활");
    setTitle(newArray);
    /*Array, Object state 데이터 수정 방법(그냥 카피할 경우 값 공유만)
    -변경함수를 사용함(대체할 데이터)
    -State는 직적 변경하지 않는다.
    -deepCopy를 사용하여 수정*/
  };

  const likeHandler = (index) => {
    const likeArray = [...likeBtn];
    likeArray[index] += 1;
    setLikeBtn(likeArray);
  };

  const modalTitleHandler = (index) => {
    setClickTitle(index);
    setModal(!modal);
  };

  const addBoardListHandler = () => {
    const titleArray = [...title];
    titleArray.unshift(input);
    setTitle(titleArray);
    const likeArray = [...likeBtn];
    likeArray.unshift(0);
    setLikeBtn(likeArray);
  };

  return (
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      <button
        onClick={() => {
          firstTitleHandler();
        }}
      >
        <div className="sidebar" />
        버튼
      </button>
      {title.map(function (titleArray, index) {
        return (
          <div className="boardList" key={index}>
            <h3
              onClick={() => {
                modalTitleHandler(index);
              }}
            >
              {titleArray + "   "}
            </h3>
            <button
              className="likeBtn"
              onClick={() => {
                likeHandler(index);
              }}
            >
              👍
            </button>
            {"   " + likeBtn[index]}
            <p>4월 22일 발행</p>
            <hr />
          </div>
        );
      })}
      <div className="writeTitleContainer">
        <input
          className="writeTitleInput"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="saveTitleBtn"
          onClick={() => {
            addBoardListHandler();
          }}
        >
          저장
        </button>
      </div>
      {modal ? <Modal title={title} clickTitle={clickTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <div className="modal">
        <h2>{props.title[props.clickTitle]}</h2>
        <p>날짜</p>
        <hr />
      </div>
    </div>
  );
}

export default App;

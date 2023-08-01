
import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['여자 치마 추천', '강남 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);
  let [좋아요2, 좋아요변경2] = useState(0);
  let [좋아요3, 좋아요변경3] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4> React Blog </h4>
      </div>
      <div className="list">
        <h4> { 글제목[0] } <span onClick={ ()=> { 좋아요변경(좋아요+1)} }>❤️</span> {좋아요} </h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4> { 글제목[1] } <span onClick={ ()=> { 좋아요변경2(좋아요2+1)} }>❤️</span> {좋아요2} </h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4> { 글제목[2] } <span onClick={ ()=> { 좋아요변경3(좋아요3+1)} }>❤️</span> {좋아요3} </h4>
        <p>8월 1일 발행</p>
      </div>
      <button onClick={() => { 
        let copy = [...글제목];
        copy[0] = '여자 셔츠 추천';
        글제목변경(copy);
        }}>글 수정!!</button>
      <button>제목 정렬</button>
    </div>
  );
}
export default App;

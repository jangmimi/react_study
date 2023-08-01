// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let count = 0;
  // const [useState(0),변환될 값] = 초기값;
  // state
  // - 컴포넌트 내부에서 선언한 값
  // - setState를 통해 내부 값 변경 가능
  const [number,setNumber] = useState(77);
  // const [time,setTime] = useState(0);

  const plus = () => {
    setNumber(number + 1);
    console.log(number);
  }
  const minus = () => {
    setNumber(number - 1);
    console.log(number);
  }
  /*
  const updateTime = () => {
    setTime(time + 1);
    console.log(time);
    if(time >= 12) {
      setTime(0);
    }
  }*/
  
  return (
    /* html만 작성 */
    <div className="App">
        
      <h2> 증감하는 숫자 : <br/> {number} </h2>
      <button onClick={plus}> + </button>
      <button onClick={minus}> - </button>
      <hr/>{/*
      <h2>{time} 시</h2>
      <button onClick={updateTime}> 시간올리기 </button>*/}
    </div>
  );
}

export default App;


{/* 
(리턴 내부 주석 방식)
function App() { 
  내부에는 script 작성.
}
css, javascript 활동 적는다.
변수 선언, 상태 변경은 여기에서 진행해줌

useState: 상태값 관리지 초기값 세팅 / 값 변환 가능
import { useState } from 'react';

------------------------------------------------------------------------

return 내부에 div는 단 한 번만 사용!
<div className="App">은 <html>태그와 비슷한 역할을 한다.
  리액트에서는 onClick={} 으로 표기한다.
  위에서 선언한 변수 값 가져오기 위해서는 {} 사용하여 변수 값 넣어준다.
 */}
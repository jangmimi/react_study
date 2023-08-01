import { useState } from "react";

function AppInput() {
    // const(초기변수명,변화될변수명) = 초기값;
    // useState("") -> () 괄호 안에는 우리가 지정할 값 넣어줄 수 있음
    const[name,setName] = useState("");
    const[text,setText] = useState("");

    const handleJoin = () => {
        setName(text);
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div align="center">
            <br /><br /><br />
            {name === "" ? (
                <input
                onChange={handleChange} 
                placeholder="이름을 입력하세요."
                value={text}
                />
            ):(
                <div>{name}님 환영합니다~!</div> 
            )}
            <button onClick={handleJoin}>등록</button>
        </div>  
    );

}
export default AppInput;
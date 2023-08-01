import { useState } from "react";   // useState 사용을 위해 임포트
import "./App.css"  // css 적용을 위해 임포트

function Changename() {
    const [name, setName] = useState("미미");
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleReset = () => {
        setName("");
    }
    const handleChangeRun = (event) => {
        //setName(event.target.value);
        alert("[" + name + "] 으로 이름변경할래요!");
    }   // Q. 공백일 경우 if 문에서 name이 null 인지 체크해도 안됨

    return(
        <div className="container-name">
            <div>
                <h3>[ Name Change ] </h3> 
                <b>내 이름 : <span className="nameSpan">{name}</span></b>   
                {/* {name} 부분 실시간으로 변경되는 것이 아닌
                아래 '이름 바꾸기' 버튼 클릭 시 input 값으로 변경하는 부분 구현이 잘 안됨 */}
            </div>
            <input onChange={handleChange} value={name} placeholder="이름을 입력해주세요."/>
            <div>
                <button onClick={handleChangeRun}>이름 바꾸기</button>
                <button onClick={handleReset}>초기화</button>
            </div>
        </div>
    );
}
export default Changename;
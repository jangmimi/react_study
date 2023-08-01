### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
npm start 종료하고 다시 실행시키려면
terminal에서 ctrl + c 를 여러번 눌러주면 된다.

### React 정리
nodejs : 패키지 관리자 (리액트 이외 다양한 패키지 설치 가능)
    npx : 최신 패키지 설치이기 때문에 초반에 폴더 만들어줄 때 사용하는 명령어
        npx create-react-app 폴더명
    npm : 전반적으로 build, test, start, install 등 다방면으로 사용하는 명령어
        프로젝트 시작 명령어 : npm start 또는 npm run start 또는 npm run dev
        추가적으로 필요한 패키지 설치하는 명령어 : npm install 패키지명

    package.json      : 간략한 사용설명서
    package-lock.json : 자세히 적힌 사용설명서
    README.md         : 프로젝트에 대해 사람이 전반적으로 설명하는 공간
    .gitignore        : 깃허브에 파일을 업로드 할 때 업로드 하지 말아아 될 이름이나 확장자를 작성

### 파일 동작에 대하여
    리액트는 초반에 index.html 파일만 바라본다.
    index.js 에서 사용할 javaScript 파일을 불러온다.
    그 다음 App.js 와 같은 파일을 만들어서 컴포넌트를 작성한다.
    파일의 이름은 개발자 자유다.

### 폴더 구조
    > node_modules : 패키지. 여기 안에 react가 들어있다.
    > public       : 가장 처음에 보여지는 폴더
    > src          : 우리가 원하는 코드를 작성하는 폴더

### React 장점
    1. Virtual DOM이란 ? -> "DOM을 추상화한 가상의 객체"
    2. SPA(Single Page Application) -> 단일 페이지로 처리 (index.html)
    3. 웹으로 모바일 앱도 만들 수 있다. (*중요*)
    4. JSX(JavaScriptXML) : 코드를 컴퓨터에 맞게 변환해준다.

### 컴포넌트 작성방법
function 이름 {
    스크립트
    const [기본값, 변경될 값] = 초기기본값;
    const 동작할이름 = () => {
        변경될 값
    };
    ## 만약에 input 처럼 넣어줘야 하는 값이 있을 경우
    const 동작할이름2 = (event) => {
        변경될 값(event.target.value);
    };
    스타일
    return(
        <div> {기본값} 내용을 채워준다. </div>
    );
}
export default 이름;"# react_study" 
"# react_study" 
"# react_study" 

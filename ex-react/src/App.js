import './App.css';
import PropsComp from './Components/PropsComp';
import CountComp from './Components/CountComp';
import CountPropsComp from './Components/CountPropsComp';
import LoginComp from './Components/LoginComp';

function App() {
  return (
    <div className="App">
      {/** props을 사용하는 클래스컴포넌트 */}
      <PropsComp color="red">
        props값을 받아와서 글자색을 바꿉니다
      </PropsComp>

      {/** state을 사용하는 클래스컴포넌트
      * 버튼을 클릭할 때마다 10씩 증가하는 컴포넌트
      */}
      <CountComp />
      {/** props, state을 사용하는 클래스컴포넌트 
      * props의 num값을 가져와서 버튼을 클릭할때마다 num씩증가
      */}

      <CountPropsComp num={20} />
      <LoginComp num={20} />
      {/** LoginComp 작성후
       * state : name , login: false
      * <input>에서 name 받아오기
      * <button>에서 login true 만들기
      * <h1> name 출력 > login값이 true일 때 화면에 보임
      */}
  </div>
  );
}

export default App;

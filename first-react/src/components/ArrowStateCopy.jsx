// 16.8버전 이후로 함수형에서 state 사용 가능
import { useState } from "react";

// css파일 들고오기
import "./arrowState.css";

// 화면의 업데이트에 상관없이 사용하는 변수
// 현재 컴포넌트에서 전역변수로 쓸 변수
let globalId = 4;

// 함수형 컴포넌트의 특징
// 1) this를 사용하지 않는다
// 2) 안에 값을 넣어줄때 변수로 할당하므로 const나 let 사용
const ArrowStateCopy = (props) => {
  // useState는 항상 함수(컴포넌트)안에 작성
  const [message, setMessage] = useState({
    time: "10:53",
    text: "메세지 입니다",
  });
  // useState는 여러번 사용할수 있다
  const [number, setNumber] = useState(0);
  const [array, setArray] = useState([1, 2, 3, 4]);

  // map을 이용하여 id값과 name을 화면에 출력
  const [students, setStudents] = useState([
    { id: 1, name: "홍길동", checked: true },
    { id: 2, name: "성춘향", checked: false },
    { id: 3, name: "흥부", checked: false },
  ]);
  // 학생 이름을 받아올 공간
  const [inputName, setInputName] = useState("");

  // 클래스형에서 render()안에 값이 계속 초기화
  // 함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화
  let id = 4;

  // 메소드 작성
  const inputChange = (e) => {
    setInputName(e.target.value);
  };

  const addStudent = () => {
    // 값을 받아와서 새로운 배열로 만들기
    // 새로운 배열 students 할당
    const newStudents = students.concat({
      id: globalId,
      name: inputName,
    });
    globalId++;
    setStudents(newStudents);
    setInputName("");
  };

  // id값을 전달하여 메소드 안에서 사용
  const deleteStudent = (id) => {
    const newStudents = students.filter((s) => s.id !== id);
    setStudents(newStudents);
  };
  //
  const checkedStudent = (id) => {
    const newStudents = students.map((s) => {
      if (id !== s.id) {
        return s;
      } else {
        return { ...s, checked: !s.checked };
      }
    });
    setStudents(newStudents);
  }

  return (
    <div>
      <p>
        {number} ,{message.text}
      </p>
      <button
        onClick={() => {
          setMessage({ ...message, text: "수정된 내용" });
        }}
      >
        글자값 수정
      </button>
      {array.map((num, i) => (
        <li key={i}>{num}</li>
      ))}
      <h3>학생추가</h3>
      <input type="text" onChange={inputChange} value={inputName} />
      <button onClick={addStudent}>추가</button>
      <ul>
        {students.map((student) => (
          <li key={student.id} className={student.checked ? "on" : ""}>
            <input
              type="checkbox"
              checked={student.checked}
              readOnly
              onClick={()=>{checkedStudent(student.id)}}
            />
            {student.id} , {student.name}
            <button
              onClick={() => {deleteStudent(student.id)}}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArrowStateCopy;
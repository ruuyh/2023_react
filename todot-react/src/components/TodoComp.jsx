import { useState } from "react";


const TodoComp = () => {
 /** TodoComp에서 사용할 데이터
  * inputTodo : input 통해서 가져올 값 - state (바뀔 값이므로)
  * todoList : todo를 저장할 배열, (추가,삭제,수정 가능) - state
  *  {id :1, todo: "첫번째 할일",
  * checked: false, date: new Date("2023-04-06")}
  */ 
 const [todoList, setTodoList] = useState(
  [
    {id: 1, todo:"첫번째 값", checked:false, date:new Date("2023-04-06")},
    {id: 2, todo:"두번째 값", checked:true,  date:new Date()}
  ]
 );
  // 배열을 사용할 때 map을 사용해서 출력

  // 데이터 값을 확인하기 위해 화면의 HTML 구성
  // 데이터 값만 확인 - HTML 뼈대
  // 레이아웃 구성 확인 - css 함께
  return(
    <div>
      <h1>Todo-List</h1>
      {/**submit을 통해서 이벤트 실행 : 엔터눌렀을 때 실행 */}
      <form>
        <input type="text" />
        <input type="submit" value="+" />
      </form>
      <hr />
      <ul>
      {
        // 배열을 사용할 때 map을 사용해서 출력
        todoList.map( (todo)=>(
          <li>
          <h3>  
            {(todo.date.getMonth()+1)+"월"+todo.date.getDate()+"일"}
          </h3>
          <input type="checkbox" checked={todo.checked} />
          {todo.todo}
          <button>X</button>
          </li>
        ))
      }
      </ul>
      </div>
  )
};
export default TodoComp;
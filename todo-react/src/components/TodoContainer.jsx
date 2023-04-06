import React, { useState } from 'react';
import "./TodoContainer.css"

const TodoContainer = (props) => {
    const [todoList, setTodoList] = useState([
            { id: "4월 5일", list: "첫번째 할일", checked: true },
            { id: "4월 6일", list: "두번째 할일", checked: false }
        ]);
    const [todoValue, setTodoValue] = useState("");
    const [showAll, setShowAll] = useState(true);

    const addTodo = () => {
        const newTodoList = todoList.concat({
            id: date(new Date()),
            list: todoValue,
            checked: false,
        });
            setTodoList(newTodoList);
            setTodoValue("");
        };

    const inputChange = (e) => {
        setTodoValue(e.target.value);
        };

    const date = (dateObj) => {
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        return `${month}월 ${day}일`;
        };

    const deleteTodo = (item) => {
        const newTodoList = todoList.filter(
            (t) => t !== item
        );
        setTodoList(newTodoList);
        }

    const filteredTodoList = showAll
        ? todoList
        : todoList.filter(item => {
            const itemDate = item.id;
            const today = new Date();
            return (
            itemDate === `${today.getMonth()+1}월 ${today.getDate()}일`
        );
    });

    return (
    <div>
        <h1>Todo-list</h1>
        <input type="text" value={todoValue} onChange={inputChange} />
        <button onClick={addTodo}>+</button>
        <hr />
        <button onClick={() => setShowAll(true)}>모든 할일</button>
        <button onClick={() => setShowAll(false)}>오늘 할일</button>
        <ul>
            {filteredTodoList.map((item, i) => (
            <li key={i}  className={item.checked && "on"}>
                <p>{item.id}</p>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            readOnly
                            onClick={() => {
                                const newTodoList = todoList.map((t) => {
                                    if (item !== t) {
                                        return t;
                                    } else {
                                        return { ...t, checked: !t.checked };
                                    }
                                });
                                setTodoList(newTodoList);
                            }}
                        />
                        {item.list}
                        <button onClick={() => deleteTodo(item)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;
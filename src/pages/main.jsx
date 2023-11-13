import { useEffect, useState } from "react";
import CreateTodo from "../components/CreateTodo";

const Main = () => {

  const [todos, setTodos] = useState([]);
  const [lastTodoID, setLastTodoId] = useState(0);
  
  const getTodos = () => {
    const localTodos = localStorage.getItem("todos")

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos)

    setTodos(parsedTodos);

    setLastTodoId(parsedTodos[parsedTodos.length - 1].id);
 
  };

// 로컬스토리지로부터 읽어오는 함수 필요 비어있는 대괄호는 전개구문 시 배열이 비어있는 상태도 포함시키기 위함
// localTodos의 값이 없으면 돌아오게 if~ return 설정

useEffect(() => {
  getTodos();  
}, []);

  return (
  
  <main className="bg-gray-400 min-h-screen mx-auto">
    <h1 className="bg-blue-100 text-center text-4xl font-bold py-12">
    To do List
    </h1>
    <CreateTodo todos={todos} getTodos={getTodos} lastTodoID={lastTodoID}/>
    <ul className="bg-green-200 w-96 mx-auto mt-12 h-[30rem] overflow-y-auto">
        {todos.length === 0
        // 배열의 경우. 문자열이나 숫자열 값을 입력할 때 처럼 !를 사용하면 안됨!
          ? "비어있을 때"
          : todos.map((v, i) => {
              return (
                <li key={i} className="h-12 flex items-center text-xl">
                  <span className="w-1/12 text-right">{v.id}</span>
                  <span className="w-8/12 pl-2">{v.title}</span>
                  <button className="w-3/12 hover:font-bold">Detail</button>
                </li>
              );
            })}
      </ul>
  </main>
  );
};

export default Main;
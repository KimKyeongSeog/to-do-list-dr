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
  
  <main className="bg-gray-400 min-h-screen-md mx-auto">
    <h1 className="bg-blue-100 text-center text-4xl font-bold py-12">
    To do List
    </h1>
    <CreateTodo todos={todos} getTodos={getTodos} lastTodoID={lastTodoID}/>
    <ul className="bg-cyan-100 w-96 mx-auto mt-12 h-[480px] overflow-y-auto">
      <li className="h-12 flex items-center text-xl">
        <span className="w-1/12 text-right">1</span>
        <span className="w-8/12 pl-2">💻 코딩하기</span>
        <button className="w-3/12 hover:font-bold">Detail</button>
      </li>
    </ul>
  </main>
  );
};

export default Main;
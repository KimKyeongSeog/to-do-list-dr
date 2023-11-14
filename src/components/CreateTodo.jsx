import { useState } from "react";

const CreateTodo = ({ todos, getTodos, lastTodoID }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitNewTodo = (e) => {
    e.preventDefault();
    // 제출한 값을 추가
    if (!newTodo) return;
    //값 없을 떄 return
    const newTodos = [
      ...todos,
      { id: lastTodoID + 1, title: newTodo, isDone: false },
    ];
    //새로운 배열이 추가될 때 , 기존 todo값에서 새로운 todo를 추가함.
    // isDone : false 는 미완료 처리하므로써 todo list의 정보를 계속 받아오기 위한 설정값
    
    localStorage.setItem("todos", JSON.stringify(newTodos)); 
    //새로운 배열을 저장하기 위함, 로컬스토리지는 문자열로 저장되기 떄문에 전환도 같이함

    getTodos(); //저장한 값을 가져오기 위함
    setNewTodo(""); //내용을 등록 후 초기값으로 재설정하기 위함
  };

  return (
    <form
      className="w-96 mx-auto mt-12 flex"
      onSubmit={onSubmitNewTodo}
    >
      <input
        className="w-3/4 mr-4 rounded-md p-2 focus:outline-none border-2 focus:border-blue-300"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        className="w-1/4 bg-blue-400 hover:bg-blue-600 active:bg-blue-400 rounded-md text-white font-semibold"
        type="submit"
        value="생 성"
      />
    </form>
  );
};

export default CreateTodo;
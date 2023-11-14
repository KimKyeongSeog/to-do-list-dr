import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { FiCheckSquare, FiTrash2, FiEdit } from "react-icons/fi";

const Detail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const isDone = searchParams.get("is-done");

  const onClickIsDone = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const updatedTodos = parsedTodos.map((v, i) => {
      if (v.id === +id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    navigate("/");
    // { replace: true} => 뒤로가기 불가능 설정
  };

  const onClickDel = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const deletedTodos = parsedTodos.filter((v) => {
      if (v.id !== +id) {
        return v;
      }
      
    });

    if (deletedTodos.length === 0) {
      localStorage.removeItem("todos");
    } else {
      localStorage.setItem("todos", JSON.stringify(deletedTodos));
    }

    // removeItem을 사용한 이유
    // parsedTodo.length === 0
    // 0 - 1
    // parsedTodos(-1) ; bug..


    navigate("/");
  };
  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <span>{id}</span>
      <span className="ml-4">{title}</span>
      <button
        onClick={onClickIsDone}
        className="bg-green-400 hover:bg-green-600 active:bg-green-400 rounded-md px-2 h-10 flex justify-center items-center ml-4"
      > {/* 로컬 스토리지에 반영 , 리액트에있는 Todos에 반영 > 로컬스토리지 업데이트 로컬 스토리지 내용을 다시 불러옴*/}
    
        <FiCheckSquare /> {isDone === "true" ? "완료취소" : "완료" }
        {/* isDone 값을 현재 주소창에서 불러오고 있기 때문에 결과값이 ture가 아닌 문자열로서의 true로 들어오고있음, 그렇기에 
        삼항연산자를 사용하여 ture값을 문자열로서 구분해주고 있음
        대체재로 문자열에 대하여 Boolean("true"); 를 사용할 수도 있다
        */}
      </button>

      <button
        onClick={onClickIsDone}
        className="bg-blue-400 hover:bg-blue-600 active:bg-blue-400 rounded-md px-2 h-10 flex justify-center items-center ml-4"
      >
        <FiEdit /> 수정
      </button>

      <button
        onClick={onClickDel}
        className="bg-red-400 hover:bg-red-600 active:bg-red-400 rounded-md px-2 h-10 flex justify-center items-center ml-4"
      >
        <FiTrash2 /> 삭제
      </button>
    </div>
  );
};

export default Detail;
 
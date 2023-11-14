import { useEffect } from "react";
import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
    useEffect(() => console.log(todo), []); 

  return (
    <li className={`h-12 flex items-center text-xl ${todo.isDone && "line-through"}`}>
      <span className="w-1/12 text-right">{todo.id}</span>
      <span className="w-8/12 pl-2">{todo.title}</span>
      <Link
        to={`/${todo.id}?title=${todo.title}&is-done=${todo.isDone}`}
        // Query String : URL의 끝에 위치한 ? 이후의 문자열로, 주로 웹 애플리케이션에서 클라이언트 측에서 서버로 데이터를 전달하는 데 사용됩니다. 쿼리 문자열은 키-값 쌍으로 이루어져 있으며, 각 쌍은 &로 구분됩니다.
        // &(and)
        className="w-3/12 hover:font-bold"
      >
        Detail
      </Link>  {/* 버튼을 Link로 변경 */}  
      
      {/* {todo.isDone && (

        <li className="...relative"        
        <div className="w-full border-b-4 border-black absolute bottom-[22px]"></div>
      )} 
      
      투두리스트에 css를 통해 밑줄 만들어 위치 조정 > 취소선 만듦 h662's Custom.. 
      */}

    </li>
  ); 
};

export default TodoCard;
            
            
            


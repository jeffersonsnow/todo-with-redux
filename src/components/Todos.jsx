import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeTodo} from "../features/todo/todoSlice.js";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();


        return (
            <>
                <div>
                    Todos
                </div>
                {todos.map(todo => (
                    <div key={todo.id} className="flex flex-row m-2 content-center items-center justify-around bg-blue-400 rounded">
                        <div className="text-lg">
                            {todo.text}
                        </div>
                        <button className="bg-red-500" onClick={()=> dispatch(removeTodo(todo.id))}>Delete Todo</button>
                    </div>
                ))}
            </>
        );
}

export default Todos;
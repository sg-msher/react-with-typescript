import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { v4 as uuid } from "uuid";

const data = [
    {"id": "61c37d27fc13ae492d000519", "task": "안녕"},
    {"id": "61c37d27fc13ae492d00051a", "task": "안녕"},
    {"id": "61c37d27fc13ae492d00052e", "task": "안녕"},
    {"id": "61c37d27fc13ae492d00052f", "task": "안녕"},
    {"id": "61c37d27fc13ae492d000530", "task": "안녕"},
    {"id": "61c37d27fc13ae492d000531", "task": "안녕"}
]
  

export default function App() {
    const [todos, setTodos] = useState(data);
    const listRef = useRef<HTMLUListElement>(null);
    const handleAdd = (input: string): void => {
        flushSync(() => {
            setTodos([...todos, { id: uuid(), task: input }]);
        });
        if(listRef.current) {
          listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    };
    return (
        <section>
            <p className="text-2xl font-black">Todos</p>
            <ul ref={listRef}>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
            </ul>
            <AddTodo handleAdd={handleAdd} />
        </section>
    );
}

const AddTodo = React.memo(({ handleAdd }: {handleAdd: (input: string) => void}) => {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!taskInput) return;
    setTaskInput("");
    handleAdd(taskInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="input 기입"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button>input 추가</button>
    </form>
  );
});

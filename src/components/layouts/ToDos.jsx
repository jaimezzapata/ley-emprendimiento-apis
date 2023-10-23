import React, { useState } from "react";
import Header from "../helpers/Header";
let api = "https://jsonplaceholder.typicode.com/todos";

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  fetch(api)
    .then((response) => response.json())
    .then((json) => setTodos(json));
  return (
    <div>
      <Header />
      <section className="to-dos">
        {
           todos.map((todo)=> (
            <section>
                <h1>{todo.id}</h1>
                <p>{todo.userId}</p>
                <p>{todo.title}</p>
                <section>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </section>
            </section>
           )) 
        }
      </section>
    </div>
  );
};

export default ToDos;

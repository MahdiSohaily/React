import React, { useState, useEffect } from 'react';
import store from '../redux/store';
import { ACTIONS } from '../redux/todos/todos';

export default function Todo() {
  const [, forcUpdate] = useState(0);
  const data = store.getState();
  const index = data.length + 1;
  const todos = data.map((item) => {
    return (
      <li
        key={item.id}
        onClick={() => toggleTodo(item.id)}
        className={item.completed ? 'completed' : ''}
      >
        {item.text}
      </li>
    );
  });

  useEffect(() => {
    const unsbscribe = store.subscribe(() => forcUpdate((c) => c + 1));
    return () => unsbscribe();
  },);

  function addTodo(e) {
    if (e.code === 'Enter') {
      store.dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { id: index, text: e.target.value, completed: false },
      });
      e.target.value = '';
    }
  }

  function toggleTodo(index) {
    alert(index);
    store.dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: index,
    });
  }

  return (
    <>
      {console.log(todos)}
      <label htmlFor="task">
        {'Task:'}
        <input id="task" type="text" name="task" required onKeyDown={addTodo} />
      </label>
      <ul>{todos}</ul>
    </>
  );
}

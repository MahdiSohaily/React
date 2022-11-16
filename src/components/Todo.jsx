import React from 'react';
import store from '../redux/store';
import { ACTIONS } from '../redux/todos/todos';

export default function Todo() {
  const todos = store.getState().map((item) => {
    return (
      <li key={item.id} className={item.completed ? 'completed' : ''}>
        {item.text}
      </li>
    );
  });
  return (
    <>
      {console.log(store.getState())}
      <label htmlFor="task">
        {'Task:'}
        <input id="task" type="text" name="task" required />
      </label>
      <ul>{todos}</ul>
    </>
  );
}

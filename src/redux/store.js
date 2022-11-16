import reducer from './todos/todos';
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;

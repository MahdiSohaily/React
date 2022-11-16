export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

const initState = [
  {
    id: 1,
    text: 'new todo',
    completed: false,
  },
];

function toggle(arr, index) {
  return arr.filter((item) => {
    if (item.id === index) {
      item.completed = !item.completed;
    }
    return item;
  });
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.TOGGLE_TODO:
      let newTodo = [...state];
      newTodo = toggle(newTodo, action.payload);
      return [...newTodo];
    default:
      return state;
  }
};

export default reducer;

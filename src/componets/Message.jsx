import React, { useEffect, useReducer } from 'react';
import Loading from './Loading/Loading';
import Toast from './Toast/';

const initState = {
  postID: 1,
  message: '',
  title: '',
  loading: true,
};

function reducer(state, payload) {
  switch (payload.action) {
    case 'SUCCESS-REQUEST':
      return {
        ...state,
        message: payload.message,
        title: payload.title,
        loading: payload.loading,
      };
    case 'MAKE-REQUEST':
      return {
        ...state,
        postID: payload.postID,
        loading: payload.loading,
      };
    default:
      return {
        ...state,
      };
  }
}

export default function Message() {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    setTimeout(() => {
      const title = 'Post received Successfully' + Math.random();
      dispatch({
        action: 'SUCCESS-REQUEST',
        message: title,
        title: title,
        loading: false,
      });
    }, 2000);
  }, [state.postID]);

  function handleChange(e) {
    const { value } = e.target;
    if (value >= 0) {
      dispatch({
        action: 'MAKE-REQUEST',
        postID: value,
        loading: true,
      });
      return true;
    }
    alert(`post ID can't be negative number `);
  }

  return (
    <>
      <h1>{state.title}</h1>
      <label>
        {' Post ID: '}
        <input
          type="number"
          name="postID"
          value={state.postID}
          min={0}
          onChange={handleChange}
        />
      </label>
      {state.loading && <Loading />}
      <Toast type="success" message={state.message} />
    </>
  );
}

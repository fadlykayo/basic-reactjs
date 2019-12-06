const initialState = {
  data: []
};

const setData = (state, action) => {
  let newState = {...state};

  newState.data.push(action.payload.data);

  return newState;
};

const deleteData = (state, action) => {
  let newState = {...state};

  newState.data.splice(action.payload.data, 1);

  return newState;
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'SET_DATA':
      return setData(state, action);

    case 'DELETE_DATA':
      return deleteData(state, action);

    default:
      return state;
  };
};

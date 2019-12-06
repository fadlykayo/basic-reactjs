const initialState = {
  data: []
};

const setData = (state, action) => {
  let newData = state.data;
  newData.push(action.payload.data);

  let newState = Object.assign(state, {data: newData});
  console.log(newState);

  return newState;
};

const deleteData = (state, action) => {
  let newData = state.data;
  newData.splice(action.payload.data, 1);

  let newState = Object.assign(state, {data: newData});
  console.log(newState);

  return newState;
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_DATA':
      return state.data;

    case 'SET_DATA':
      return setData(state, action);

    case 'DELETE_DATA':
      return deleteData(state, action);

    default:
      return state;
  };
};

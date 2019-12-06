export default {
  getData: () => {
    return {
      type: 'GET_DATA'
    }
  },

  setData: (inputValue) => {
    return {
      type: 'SET_DATA',
      payload: {
        data: inputValue
      },
    }
  },

  deleteData: (index) => {
    return {
      type: 'DELETE_DATA',
      payload: {
        data: index
      },
    }
  }
}

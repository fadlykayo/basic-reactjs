export default {
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

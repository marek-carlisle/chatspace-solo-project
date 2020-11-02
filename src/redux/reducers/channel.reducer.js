const channelReducer = (state = {channelList: [], selectedChannel: null}, action) => {
    switch (action.type) {
      case 'SET_CHANNELS':
        return {...state, channelList: action.payload};
      case 'SELECT_CHANNEL':
        return {...state, selectedChannel: action.payload};
      default:
        return state;
    }
  };

  export default channelReducer;
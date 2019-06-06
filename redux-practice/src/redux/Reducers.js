import { combineReducers } from 'redux'

const getTitle = (state=[], action) => {
  switch(action.type){
    default: return state
  }
}

const setRepos = (state=[], action) => {
  switch(action.type){
    case "SET_REPOS":
    return state.concat(action.value);
    default: 
    return state
  }
}

export default combineReducers({
  title: getTitle,
  api: setRepos
})
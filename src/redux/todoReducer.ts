import {IAction, IStore} from "./store";

const INITIAL_STATE = {todos: []};

export default (state: IStore = INITIAL_STATE, action: IAction):IStore  => {
  const {payload} = action
  switch(action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [
          ...state.todos,
          payload
        ]
      }
    }
    default:
      return state
  }
}

import {createStore} from "redux";
import {rootReducer} from "./rootReducer";

export interface IStore {
  todos: string[]
}

export interface IAction {
  type: string,
  payload: string,
}

export const store = createStore(rootReducer);

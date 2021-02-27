import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

interface IMapStateToProps {
  todoReducer: {todos: string[]}
}

interface IProps {
  todos: string[]
  val: string
  dispatch: Dispatch
}

const List = ({todos, val}: IProps) => {
  return (
    <ul>
      {
        todos.map((todo, key) => <li key={key}>{todo}</li>)
      }
    </ul>
  )
}

const mapStateToProps = (state: IMapStateToProps, ownProps: {val: string}) => {
  // console.log(ownProps.val)
  const {todoReducer: {todos}} = state
  return {todos}
}

export default connect(mapStateToProps)(List)

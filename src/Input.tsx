import React, {ChangeEvent, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

type AddTodo = (input:string) => ({type: string, payload: string})

const Input = (props: {addTodo: AddTodo}) => {
  const [input, setInput] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={input} onChange={onInputChange} type="text"/>
      <button type='submit'>Submit</button>
    </form>
  )
}

const addTodo = (input: string) => ({type: 'ADD_TODO', payload: input})


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {dispatch, ...bindActionCreators({addTodo}, dispatch)}
}

export default connect(null, mapDispatchToProps)(Input)

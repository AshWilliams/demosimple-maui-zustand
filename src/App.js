import '@fontsource/roboto/300.css';
import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';
import { Stack } from '@mui/material'
import { MyButton, Display } from "./Components/Components";
import { todoStore } from "./Stores/TodoStore";
import { counterStore } from "./Stores/CounterStore";
import { label } from "./Styles";
import { Checkbox }  from '@mui/material';

export const App = () => {
  const { counter,setCounter } = counterStore();
  const incrementCounter = (increment) => setCounter(counter + increment);
  const { todos, addTodo, removeTodo, removeAll } = todoStore();
  return (
    <React.Fragment>
      <Stack spacing={2} direction="row">       
        <MyButton onClickFunction={incrementCounter} increment={1} add={true}></MyButton>
        <MyButton onClickFunction={incrementCounter} increment={5} add={true}></MyButton>
        <MyButton onClickFunction={incrementCounter} increment={-1} add={false}></MyButton>
      </Stack>
        <Display text={counter}></Display> 
        <Display text="The following list comes from a Zustand Store"></Display>   
        <Display text={todos.map(
                        (todo) => (
                          <React.Fragment>
                            <li>
                              {todo.name}
                              <Checkbox {...label} defaultChecked size="small"> </Checkbox> 
                            </li>
                          </React.Fragment>
                        )
                 )}>
        </Display>    
    </React.Fragment>
  );
}

export default App;
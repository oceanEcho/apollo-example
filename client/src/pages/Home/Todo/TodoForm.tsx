import React, { FC } from 'react';
import { gql, useMutation } from '@apollo/client';

import {
  AddTodoMutation,
  AddTodoMutationVariables,
  CompleteTodoMutation,
  CompleteTodoMutationVariables,
  Todo,
} from '../../../api/types';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

import styles from './styles.module.scss';

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      active
    }
  }
`;

const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: ID!) {
    completeTodo(id: $id) {
      id
      text
      active
    }
  }
`;

export const TodoForm: FC<{ todos: Todo[] }> = ({ todos }) => {
  const [addTodo] = useMutation<AddTodoMutation, AddTodoMutationVariables>(ADD_TODO, { refetchQueries: ['GetTodos'] });

  const onAddTodo = (text: string) => {
    addTodo({ variables: { text } });
  };

  const [completeTodo] = useMutation<CompleteTodoMutation, CompleteTodoMutationVariables>(COMPLETE_TODO);

  const onTodoClick = (id?: string | null) => {
    completeTodo({ variables: { id: id || '' } });
  };

  return (
    <section className={styles.Home}>
      <h1>To do</h1>
      <AddTodoForm onAddTodo={onAddTodo} />
      {!todos.length && <p>Nothing to do...</p>}
      <TodoList todoList={todos} onTodoClick={onTodoClick} />
    </section>
  );
};

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import { Todo } from './types';

import styles from './styles.module.scss';

export const Home = () => {
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: '1', text: 'Pet a cat', active: true },
    { id: '2', text: 'Invite a colleague to lunch', active: true },
    { id: '3', text: 'Fill time in Jira', active: true },
  ]);

  const onAddTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        text,
        active: true,
      },
    ]);
  };

  const onTodoClick = (id: string) => {
    const newTodoList = [...todoList];

    const selectedTodoIndex = todoList.findIndex((todo: Todo) => id === todo.id);

    if (selectedTodoIndex !== -1) {
      newTodoList[selectedTodoIndex] = {
        ...newTodoList[selectedTodoIndex],
        active: !todoList[selectedTodoIndex].active,
      };
    }

    setTodoList(newTodoList);
  };

  return (
    <section className={styles.Home}>
      <h1>To do</h1>
      <AddTodoForm onAddTodo={onAddTodo} />
      {!todoList.length && <p>Nothing to do...</p>}
      <TodoList todoList={todoList} onTodoClick={onTodoClick} />
    </section>
  );
};

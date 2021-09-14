import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { GetTodosQuery } from '../../api/types';
import { TodoForm } from './Todo';
import { Loader } from '../../components/Loader';
import { notEmpty } from '../../utils/notEmpty';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      active
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery<GetTodosQuery>(GET_TODOS);

  if (loading) {
    return <Loader />;
  }

  const todos = data?.todos?.filter(notEmpty) || [];

  return <TodoForm todos={todos} />;
};

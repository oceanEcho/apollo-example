import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { GetTodosQuery } from '../../api/types';
import { TodoForm } from './Todo';
import { Loader } from '../../components/Loader';
import { TODO_FORM_FRAGMENT } from './fragments';

const GET_TODOS = gql`
  query GetTodos {
    ...TodoFormData
  }
  ${TODO_FORM_FRAGMENT.todo}
`;

export const Home = () => {
  const { loading, error, data } = useQuery<GetTodosQuery>(GET_TODOS);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return <TodoForm data={data} />;
};

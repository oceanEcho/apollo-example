export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo?: Maybe<Todo>;
  completeTodo?: Maybe<Todo>;
};

export type MutationAddTodoArgs = {
  text: Scalars['String'];
};

export type MutationCompleteTodoArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type Todo = {
  __typename?: 'Todo';
  active?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never }>;

export type GetTodosQuery = {
  __typename?: 'Query';
  todos?: Maybe<
    Array<Maybe<{ __typename?: 'Todo'; id?: Maybe<string>; text?: Maybe<string>; active?: Maybe<boolean> }>>
  >;
};

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String'];
}>;

export type AddTodoMutation = {
  __typename?: 'Mutation';
  addTodo?: Maybe<{ __typename?: 'Todo'; id?: Maybe<string>; text?: Maybe<string>; active?: Maybe<boolean> }>;
};

export type CompleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CompleteTodoMutation = {
  __typename?: 'Mutation';
  completeTodo?: Maybe<{ __typename?: 'Todo'; id?: Maybe<string>; text?: Maybe<string>; active?: Maybe<boolean> }>;
};

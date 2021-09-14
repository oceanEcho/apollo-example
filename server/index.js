const { ApolloServer, gql } = require("apollo-server");
const { v4: uuid } = require("uuid");

const typeDefs = gql`
  type Todo {
    id: ID
    text: String
    active: Boolean
  }

  type Query {
    todo(id: ID!): Todo
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): [Todo]
    completeTodo(id: ID!): Todo
  }
`;

let todos = [
  {
    id: "1",
    text: "Pet a cat",
    active: true,
  },
  {
    id: "2",
    text: "Learn GraphQL",
    active: true,
  },
];

const resolvers = {
  Query: {
    todo: (parent, args, context, info) =>
      todos.find((todo) => todo.id === args.id) || null,
    todos: () => todos,
  },
  Mutation: {
    addTodo: (parent, args, context, info) => {
      const newTodo = { id: uuid(), text: args.text, active: true };

      todos = [...todos, newTodo];

      return todos;
    },
    completeTodo: (parent, args, context, info) => {
      const selectedTodoIndex = todos.findIndex((todo) => todo.id === args.id);

      if (selectedTodoIndex !== -1) {
        todos[selectedTodoIndex] = {
          ...todos[selectedTodoIndex],
          active: !todos[selectedTodoIndex].active,
        };

        return todos[selectedTodoIndex];
      }

      return null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

import { gql } from '@apollo/client';

export const TODO_FORM_FRAGMENT = {
  todo: gql`
    fragment TodoFormData on Query {
      todos {
        id
        text
        active
      }
    }
  `,
};

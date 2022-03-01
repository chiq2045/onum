import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query getNotes {
    notes {
      id
      date
      note
    }
  }
`;

export const GET_NOTE = gql`
  query getNote($id: ID!) {
    note(id: $id) {
      id
      date
      note
    }
  }
`;

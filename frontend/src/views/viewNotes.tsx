import React, { useMemo } from 'react';
import { gql, OperationVariables, QueryResult, useQuery } from '@apollo/client';
import { Note } from 'utils/types';
import { Loader } from 'components/loader';
import { Text } from 'components/text';

const GET_NOTES = gql`
  query getNotes {
    notes {
      id
      date
      note
    }
  }
`;

export const ViewNotes = () => {
  const { loading, error, data } = useQuery(GET_NOTES) as QueryResult<
    { notes: Array<Note> },
    OperationVariables
  >;

  const notes = useMemo(() => {
    if (data && data.notes) {
      return data.notes;
    }
    return [];
  }, [data]);

  return (
    <>
      <h1> View All Notes</h1>
      <ul>
        {loading ? <Loader /> : null}
        {error ? <Text>{error.message}</Text> : null}
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={`${note.id}-${note.date}`}>{note.note}</li>
          ))
        ) : (
          <Text size='large' color='warning'>
            No Notes Available
          </Text>
        )}
      </ul>
    </>
  );
};

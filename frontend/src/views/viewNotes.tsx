import React, { useMemo } from 'react';
import { OperationVariables, QueryResult, useQuery } from '@apollo/client';
import { Note } from 'utils/types';
import { Loader } from 'components/loader';
import { Text } from 'components/text';
import { List } from 'components/list';
import { Card } from 'components/card';
import { Link } from 'react-router-dom';
import {GET_NOTES} from 'utils/constants/queries';

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
      <List>
        {loading ? <Loader /> : null}
        {error ? <Text>{error.message}</Text> : null}
        {notes.length > 0 ? (
          notes.map((note) => (
            <li key={`${note.id}-${note.date}`}>
              <Link to={note.id}>
                <Card
                  size='small'
                  hover
                  body
                  title={(className) => (
                    <Text className={className}>{note.date}</Text>
                  )}
                >
                  <Text wrap='truncate'>{note.note}</Text>
                </Card>
              </Link>
            </li>
          ))
        ) : (
          <Text wrap='truncate' size='large' color='warning'>
            No Notes Available
          </Text>
        )}
      </List>
    </>
  );
};

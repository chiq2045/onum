import { QueryResult } from '@apollo/client';
import { Container } from 'components/container';
import { Text } from 'components/text';
import React from 'react';
import { useParams } from 'react-router-dom';
import { client } from 'utils/constants';
import { GET_NOTE } from 'utils/constants/queries';
import { Note } from 'utils/types';

export const ViewNote = () => {
  const { id } = useParams();
  console.log(id);
  const { note } = client.readQuery({
    query: GET_NOTE,
    variables: {
      id
    }
  });

  console.log(note);
  return (
    <>
      <h1>View Note</h1>
      <Container>{/* <Text>{note.id}</Text> */}</Container>
    </>
  );
};

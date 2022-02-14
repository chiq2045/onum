import React from 'react';
import 'uikit/dist/css/uikit.css';
import { Text } from '.';

export default {
  default: <Text>Default</Text>,
  size: (
    <>
      <Text size='small'>Small</Text>
      <Text size='default'>Large</Text>
      <Text size='large'>Large</Text>
    </>
  ),
  weight: (
    <>
      <Text weight='lighter'>Lighter</Text>
      <Text weight='light'>Light</Text>
      <Text weight='normal'>Normal</Text>
      <Text weight='bold'>Bold</Text>
      <Text weight='bolder'>Bolder</Text>
    </>
  ),
  italic: <Text italic>Italic</Text>,
  transform: <>
      <Text transform='capitalize'>The first letter of each word is capitalized</Text>
      <Text transform='uppercase'>This is in All Caps</Text>
      <Text transform='lowercase'>This is All Lowercase</Text>
  </>,
  color: <>
      <Text color='muted'>Muted</Text>
      <Text color='emphasis'>Emphasis</Text>
      <Text color='primary'>Primary</Text>
      <Text color='secondary'>Secondary</Text>
      <Text color='success'>Success</Text>
      <Text color='warning'>Warning</Text>
      <Text color='danger'>Danger</Text>
  </>,
  background: <>
      <Text background>Danger</Text>
    <Text backgroundStyle={{ backgroundColor: 'red'}}>Danger</Text>
      <Text background backgroundStyle={{ backgroundColor: 'blue'}}>Danger</Text>
  </>
};

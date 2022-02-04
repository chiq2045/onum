import React from 'react';
import { Button } from '.';
import 'uikit/dist/css/uikit.css';

export default {
  default: <Button>Default</Button>,
  disabled: <Button disabled>Disabled</Button>,
  primary: <Button color='primary'>Primary</Button>,
  secondary: <Button color='secondary'>Secondary</Button>,
  danger: <Button color='danger'>Danger</Button>,
  text: <Button color='text'>Text</Button>,
  link: <Button color='link'>Link</Button>,
};

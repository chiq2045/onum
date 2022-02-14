import React from 'react';
import { Button } from '.';
import 'uikit/dist/css/uikit.css';

export default {
  default: <Button>Default</Button>,
  disabled: <Button disabled>Disabled</Button>,
  colors: (
    <>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='danger'>Danger</Button>
      <Button color='text'>Text</Button>
      <Button color='link'>Link</Button>
    </>
  ),
  width: (
    <>
      <Button width='1-1'>Full</Button>
      <Button width='1-2'>1/2</Button>
      <Button width='1-3'>1/3</Button>
      <Button width='2-3'>2/3</Button>
      <Button width='1-4'>1/4</Button>
      <Button width='3-4'>3/4</Button>
      <Button width='1-5'>1/5</Button>
      <Button width='2-5'>2/5</Button>
      <Button width='3-5'>3/5</Button>
      <Button width='4-5'>4/5</Button>
      <Button width='1-6'>1/6</Button>
      <Button width='5-6'>5/6</Button>
    </>
  ),
  type: (
    <>
      <Button type='submit'>Submit</Button>
      <Button type='reset'>Reset</Button>
    </>
  ),
  'button as anchor': <Button href='/#'>Link</Button>,
  size: (
    <>
      <Button size='small'>Small</Button>
      <Button size='large'>Large</Button>
    </>
  ),
  'with dropdown': (
    <Button
      dropdownMenu={
        <ul className='uk-nav uk-dropdown-nav'>
          <li>Item 1</li>
        </ul>
      }
    >
      Dropdown
    </Button>
  )
};

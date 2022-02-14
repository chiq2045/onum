import React from 'react';
import { Container } from '.';
import 'uikit/dist/css/uikit.css';

const coloredArea = <div style={{ backgroundColor: 'slateblue', color: 'white' }}>Test</div>;

export default {
  default: <Container>{coloredArea}</Container>,
  size: <>
    <Container size='xsmall'>{coloredArea}</Container>
    <Container size='small'>{coloredArea}</Container>
    <Container size='large'>{coloredArea}</Container>
    <Container size='xlarge'>{coloredArea}</Container>
    <Container size='expand'>{coloredArea}</Container>
  </>
};

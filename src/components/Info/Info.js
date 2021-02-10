import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageInfo } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero
      titleText={pageInfo.title} 
      imageSource={pageInfo.image} 
    />
    {pageInfo.description}
  </Container>
);

export default Info;
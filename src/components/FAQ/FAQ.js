import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { pageFAQ } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero
      titleText={pageFAQ.title}
      imageSource={pageFAQ.image}
    />
    {pageFAQ.description}
  </Container>
);

export default FAQ;
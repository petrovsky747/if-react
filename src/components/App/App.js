import './App.css';
import '../../fonts.css';
import { array } from './data';

import { Card } from '../Card';
import { Carousel } from '../Carousel';
import { Container } from '../Container';
import { Section } from '../Section';
import { Title } from '../Title';

export const App = () => {
  return (
    <Section className="homes">
      <Container className="homes-container">
        <Title title="Homes guests loves" className="homes-title"></Title>
        <Carousel>
          {array.map(({ id, name, city, country, imageUrl }) => (
            <Card key={id} name={name} city={city} country={country} imageUrl={imageUrl}></Card>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

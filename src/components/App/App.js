import './App.css';
import '../../fonts.css';
import { Container } from '../Container';
import { Section } from '../Section';
import { Title } from '../Title';
import { Card } from '../Card';
import { array } from '../Carousel/data';

export const App = () => {
  return (
      <Section className="homes">
        <Container className="homes-container">
          <Title title="Homes guests loves" className="homes-title"></Title>
          {array.map(({id, name, city, country, imageUrl}) => (
              <Card key={id} name={name} city={city} country={country} imageUrl={imageUrl}></Card>
          ))}
        </Container>
      </Section>
  );
}

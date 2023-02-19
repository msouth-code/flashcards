import { useState } from "react";
import Cards from "./components/Cards";
import { Container } from "@mantine/core";
import Edit from "./components/Edit";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import CardForm from "./components/CardForm";

function App() {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fakeCards = [];
    for (let index = 0; index < 5; index++) {
      fakeCards.push({
        id: faker.datatype.uuid(),
        front: faker.lorem.word(),
        back: faker.lorem.word(),
      });
    }
    setCards(fakeCards);
  }, []);

  const remove = (id) => {
    setCards((cards) => {
      return cards.filter((card) => {
        return card.id !== id; 
      });
    });
  };

  const add = () => {
    setCards((cards) => {
      return [
        ...cards,
        {
          front: "new front",
          back: "new back"
        },
      ];
    });
  };

  return (
      <Container> 
        <Edit add={add} />
        <Cards cards={cards} remove={remove} />
        {/* <CardForm/> */}
        
      </Container>

  ); 
}

export default App;

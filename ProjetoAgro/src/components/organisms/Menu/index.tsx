
import { ico_card } from '../../../utils/ico';
import CreateCard from '../Card';
import { Container } from '../../../styles/styles';
import MenuText from '../../molecules/Menu';
import { useState } from 'react';

const MenuBar = () => {
    const [selectedText, setSelectedText] = useState<string>('');


    const handleCardSelect = (text: string) => {
      setSelectedText(text);
    };

    

  return (
    <>
    <Container height='40px' position={true}>
        <CreateCard isList={ico_card} onCardSelect={handleCardSelect}/>
    </Container>
    <Container height='800px'>
      <Container height='90%' BackgroundColor='#343434' margin='200px'>
        <MenuText value={selectedText}/>
      </Container>
    </Container>

    </>
  )
};

export default MenuBar;

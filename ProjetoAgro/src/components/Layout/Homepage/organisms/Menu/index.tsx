
import { ico_card } from '../../../../../utils/ico';
import CreateCard from '../../molecules/Card';
import { Container } from '../../../../../styles/styles';
import { useState } from 'react';
import Weather from '../Weather';

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
        <Container height='85%' BackgroundColor='#343434' margin='100px' image={true} width='80%' radius='8px' r_align={true} column={true}>
          <Weather />
        <Container />
      </Container>
    </Container>

    </>
  )
};

export default MenuBar;

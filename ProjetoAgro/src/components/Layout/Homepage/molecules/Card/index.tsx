
import { Card, Container } from '../../../../../styles/styles';
import CreateIco from '../../atoms/Icons';
import Text from '../../atoms/Text';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

interface CreateCardProps {
  icon?: IconDefinition;
  text?: string;
  isList?: { icon: IconDefinition; text: string }[];
  onCardSelect?: (text: string) => void;
  onClick?: () => void;
}

const CreateCard = ({ icon, text, isList, onCardSelect, onClick }: CreateCardProps) => {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number, text: string) => {
    setSelectedIndex(index);
    if (onCardSelect) {
      onCardSelect(text);
    } 

    
  };

  return (
    <>
      {isList ? (
        isList.map((item, index) => (
          <Card
            key={index}
            className={selectedIndex === index ? 'select-card' : ''}
            onClick={() => handleCardClick(index, item.text)}
          >
            <Container height='50%'>
              <CreateIco icon={item.icon} />
            </Container>
            <Container height='50%'>
              <Text text={item.text} />
            </Container>
          </Card>
        ))
      ) : (
        <Card>
          <Container height='50%'>
            {icon && <CreateIco icon={icon} />}
          </Container>
          <Container height='50%'>
            <Text text={text} />
          </Container>
        </Card>
      )}
    </>
  );
};

export default CreateCard;

import { ico_card } from '../../../../../utils/ico';
import CreateCard from '../../molecules/Card';
import { Container } from '../../../../../styles/styles';
import { useState } from 'react';
import Weather from '../Weather';
import Cotacao from '../Cotacao';
import { Overlay } from '../../../../../styles/global';

const MenuBar = () => {
    const [selectedText, setSelectedText] = useState<string>('');
    const [boxVisible, setBoxVisible] = useState<boolean>(false);



    const handleCardSelect = (text: string) => {
        setSelectedText(text);
        setBoxVisible(true);
    };




    return (
        <>
            <Container height='40px' position={true}>
                <CreateCard isList={ico_card} onCardSelect={handleCardSelect}/>
            </Container>
            <Container height='800px' id='container-body'>
                <Container
                    height='85%'
                    BackgroundColor='transparent'
                    margin='100px'
                    width='80%'
                    radius='8px'
                    r_align={true}
                    column={true}
                    image={selectedText}
                    className='container-menu'
                    translate={boxVisible ? '0%' : '-15%'}
                    opacity={boxVisible ? '1' : '0'}
                    isAnimation={selectedText != 'Clima Geral' ? `none` : ``}
                >
                    {selectedText === 'Clima Geral' && <Weather />}
                    {selectedText === 'Cotação Moedas' && (<><Cotacao /></>)}
                    <Container />
                </Container>
            </Container>
        </>
    );
};

export default MenuBar;


import { Container } from '../../../../../styles/styles';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

type InformacoesType = {
    ico_weather?: string,
    text?: string;
}


const InformacoesWeather = ({ico_weather, text}: InformacoesType) => {
  return (
    <>
    <Container width='25%' column={true} display={true}>
        <Container height='50%' flex_adjust='start' column={true} display={true}>
            <Image image={ico_weather}/>
            <Text text={text} classname='text-weather-info-2'/>
        </Container>
        <Container height='50%' flex_adjust='center' column={true} display={true}>
            <Text text='29°C' classname='text-data-2-card'/>
        </Container>
    </Container>
    </>
  )
};

export default InformacoesWeather;

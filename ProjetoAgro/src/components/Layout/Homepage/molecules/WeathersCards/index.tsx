
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from '../../../../../styles/styles';
import { Container } from '../../../../../styles/styles';

const CreateCards = () => {
    const regioes = [1, 2 ,3 ,4]

    return (
            <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop
            >
                {regioes.map((regiao, index) => (
                   <SwiperSlide className='swiper-config'>
                        <Container flex_adjust='center' display={true}>
                            <Card key={index} width='350px' height='250px' radius='8px' hover='none' color='#fff' className='card-anim'>
                                <Container height='50%' BackgroundColor='#343434'></Container>
                            </Card>
                        </Container>
                   </SwiperSlide> 
                ))}
            </Swiper>
    )
  
};

export default CreateCards

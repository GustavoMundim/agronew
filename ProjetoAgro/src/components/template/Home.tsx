import { useState } from 'react'
import { SectionHome, Noticias, CardsNotices} from '../../styles/styles';
import Banner from '../organisms/BannerVideo';

function Homepage() {
  return (
    <>
    <SectionHome>
      <Banner />
      <Noticias>
      </Noticias>
    </SectionHome>
    </>
  )

}

export default Homepage;
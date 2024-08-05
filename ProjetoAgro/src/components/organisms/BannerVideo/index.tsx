import { Overlay } from '../../../styles/global';
import { BannerVideo } from '../../../styles/styles';
import Video from '../../atoms/PhotoBanner';
import agro from '../../../assets/Banner/agro.mp4'

const Banner = () => {
  return (
    <BannerVideo>
        <Video src={agro}/>
        <Overlay color="#fff" opacity='0.4' />
    </BannerVideo>
  )
};

export default Banner

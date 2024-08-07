
import { Overlay } from '../../../../../styles/global';
import { BannerPhoto } from '../../../../../styles/styles';
import PhotoSection from '../../atoms/PhotoBanner';
import photo from '../../../../../assets/Banner/agro.jpg';


const Banner = () => {

  return (
    <BannerPhoto>
        <PhotoSection image={photo}/>
        <Overlay color="#fff" opacity='0.5' />
    </BannerPhoto>
  )
};

export default Banner


import { VideoStyled } from '../../../styles/styles';

type video = {
  src?: string;
};

const Video = ({ src }: video) => {
  return (
    <VideoStyled  src={src} autoPlay muted loop />
  );
};

export default Video;

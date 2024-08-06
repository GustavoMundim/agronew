import { PhotoStyled } from "../../../styles/styles";

type PhotoType = {
  image: string;
};

const PhotoSection = ({ image }: PhotoType) => {
  return (
    <PhotoStyled  src={image} />
  );
};

export default PhotoSection;
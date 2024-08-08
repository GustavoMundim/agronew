type ImageProps = {
  image: string;
  className?: string; // Changed from `class` to `className`
}

const Image = ({ image, className }: ImageProps) => {
return (
  <img src={image} className={className} alt="description" /> 
);
};

export default Image;

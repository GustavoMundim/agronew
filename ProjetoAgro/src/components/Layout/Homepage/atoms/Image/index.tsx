
type ImageProps = {
    image: string
}

const Image = ({image}: ImageProps | any) => {

  return (
    <img src={image}></img>
  )
};

export default Image;

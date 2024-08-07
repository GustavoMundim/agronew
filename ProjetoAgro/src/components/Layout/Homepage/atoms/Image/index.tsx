
type ImageProps = {
    src: string
}

const Image = ({src}: ImageProps) => {

  return (
    <img src={src}></img>
  )
};

export default Image;

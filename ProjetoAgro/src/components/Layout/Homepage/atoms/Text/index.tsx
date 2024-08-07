

interface CreateTextProps {
  text?: string;
  classname?: string
}

const Text = ({ text = '', classname }: CreateTextProps) => {  
  return <h3 className={classname}>{text}</h3>;  
}
export default Text;

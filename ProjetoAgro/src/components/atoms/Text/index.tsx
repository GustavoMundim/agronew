import React from 'react';

interface CreateTextProps {
  text?: string;
}

const CreateText = ({ text = '' }: CreateTextProps) => {  
  return <h3>{text}</h3>;  
}
export default CreateText;

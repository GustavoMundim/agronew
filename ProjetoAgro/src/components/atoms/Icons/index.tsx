
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CreateIcoProps {
  icon: IconDefinition;
}

const CreateIco = ({ icon }: CreateIcoProps) => {
  return (
    <FontAwesomeIcon icon={icon} className='ico-text' /> 
  );
};

export default CreateIco;

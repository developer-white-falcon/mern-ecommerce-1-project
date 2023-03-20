import React from 'react';

import { FormInputLabel, Group, Input } from './FormInput.styles';

const FormInput = ({ label, ...props }) => {
  return (
    <div>
      <Group>
        <Input {...props} />
        {label && (
          <FormInputLabel
            className={`
              ${props.value.length ? 'shrink' : ''} 
              form-input-label
            `}>
            {label}
          </FormInputLabel>
        )}
      </Group>
    </div>
  );
};

export default FormInput;

import { ReactElement } from 'react';
import { Label } from './styled';
import MaskInput from 'react-maskinput';

interface Props {
  label?: string;
  inputProps?: any;
}

export default function InputComponent({ inputProps, ...props }: Props): ReactElement {
  return (
    <Label {...props} error={inputProps.error}>
      {props.label && <span className="color-secondary mb-5">{props.label}</span>}

      {inputProps.mask ? <MaskInput {...inputProps} /> : <input {...inputProps} />}

      {inputProps.error && <span className="error">{inputProps.error!}</span>}
    </Label>
  );
}

import { Card } from 'components';
import { ReactElement } from 'react';
import { Label } from './styles';

interface Props {
  label?: string;
  inputProps?: any;
}

export default function InputFile({ inputProps, ...props }: Props): ReactElement {
  return (
    <Label {...props} error={inputProps.error}>
      {props.label && <span>{props.label}</span>}

      <Card className="card" height="45px" align="center" justify="center" bg="cardActive">
        <span>Fazer upload</span>
        <input type="file" {...inputProps} />
      </Card>

      {inputProps.error && <span className="error">{inputProps.error!}</span>}
    </Label>
  );
}

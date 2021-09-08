import { Label, Input } from './styles';

interface Props {
  label?: string;
  inputProps: any;
}

export default function TextArea({ inputProps, ...props }: Props) {
  return (
    <Label error={inputProps.error} {...props}>
      {props.label && <span>{props.label}</span>}

      <Input {...inputProps} />

      {inputProps.error && <span className="error">{inputProps.error!}</span>}
    </Label>
  );
}

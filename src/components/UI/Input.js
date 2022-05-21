import React from 'react';
import { InputContainer, InputStyle, Label } from '../../style/InputStyle';

const Input = (props) => {
  return (
    <InputContainer>
      <Label htmlFor={props.id}>{props.label}</Label>

      <InputStyle
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        style={props.style}
        size={props.size}
      />
    </InputContainer>
  );
};

export default Input;

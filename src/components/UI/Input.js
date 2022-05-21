import React from 'react';
import { InputStyle, Label } from '../../style/InputStyle';

const Input = (props) => {
  return (
    <Label htmlFor={props.id}>
      {props.label}

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
    </Label>
  );
};

export default Input;

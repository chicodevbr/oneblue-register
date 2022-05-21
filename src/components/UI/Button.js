import { ButtonStyle } from '../../style/ButtonStyle';

const Button = ({ children, type, primary }) => {
  return (
    <ButtonStyle type={type} primary={primary}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

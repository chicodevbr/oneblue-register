import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid var(--primary);
  font-size: 1rem;
  color: var(--primary);
  margin: 1rem 1.5em;
  padding: 0.25em 2em;
  cursor: pointer;
  :hover,
  :active {
    background: var(--primary);
    color: white;
  }

  ${(props) =>
    props.primary &&
    css`
      background: var(--primary);
      color: white;
      :hover,
      :active {
        background: #3688b5;
        color: white;
      }
    `}
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

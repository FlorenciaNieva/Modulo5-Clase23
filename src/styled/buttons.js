import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: #ff00ff;
  margin: 3px;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 20px;
`;

export const ButtonStyle2 = styled.button`
  color: #ff5f;
  margin: 3px;
  padding: 0.25em 1em;
  border: 2px solid #bf4f;
  border-radius: 20px;
`;

export const ButtonStyle3 = styled.button`
  background: ${props => props.$primary ? "#105ff0" : "#BF4F74"};
  color: #000;
  margin: 3px;
  padding: 0.25em 1em;
  border-radius: 20px;
`;

export const Button3Extension = styled(ButtonStyle3)`
  font-size: 2rem;
`;
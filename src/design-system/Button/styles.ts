import styled from "styled-components";



export const ButtonSolid = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  width: 100%;
  height: 2.6875rem;
  background: #ffffff;
  border-radius: 0.0625rem;
  color: #009be7;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 00.875rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.0625rem;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.0625rem;
    text-decoration: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: none;
  }
`;

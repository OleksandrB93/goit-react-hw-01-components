import styled from "@emotion/styled";

export const TransitionContainer = styled.table`
  width: 700px;

  margin: 0 auto;
  box-shadow: 0px 0px 2px 1px gray;
`;

export const Thead = styled.thead`
  text-align: center;
  text-transform: uppercase;
  height: 50px;
  color: white;
  background-color: #00bcd5;
  border: 3px solid black;
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Td = styled.td`
  padding: 0px;
  text-align: center;
`;

export const Tr = styled.tr`
  transition: all 300ms;
  &:hover {
    transform: scale(1.01);
  }
  &:nth-child(2n) {
    background-color: white;
  }
  &:nth-child(2n + 1) {
    background-color: #c5c4c4;
  }
`;

import styled from "@emotion/styled";

export const FriendListStyle = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 5px;
  box-shadow: 0px 0px 3px 1px gray;
  transition: all 250ms;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 4px 2px gray;
  }
`;

export const FriendName = styled.p`
  width: 150px;
  text-align: center;
`;


export const Status = styled.span`
    width: 15px;
    height: 9.5px;
    margin: 0 3px;
    border-radius: 50%;
    background-color: ${props => (props.status ? 'green' : 'red')};
`;
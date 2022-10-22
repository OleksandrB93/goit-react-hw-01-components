import styled from "@emotion/styled";

export const Card = styled.div`
  margin: 50px auto;
  max-width: 250px;

  box-shadow: 5px 3px 5px black;
  border-radius: 5px;
  background-color: white;
  border: 2px solid black;
  transition: all 300ms;
  &:hover {
    box-shadow: 10px 5px 5px #848484;
    transform: scale(1.03);
  }
`;

export const Description = styled.div`
  margin: 50px auto;

  & img {
    display: block;
    max-width: 150px;
    height: auto;
    margin: auto;
    margin-bottom: 20px;
    border-radius: 50%;
    border: 2px solid black;
  }

  & p {
    text-align: center;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 4px solid;
  overflow: hidden;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
`;
export const Tag = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
export const Location = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #bebebe;
  border-radius: 4px;
  border-top: 2px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  list-style: none;
`;

export const Label = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

export const Quanity = styled.span`
  font-size: 20px;
`;

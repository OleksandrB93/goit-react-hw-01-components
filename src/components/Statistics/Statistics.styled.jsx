import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  padding: 60px 0;
  width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  background-color: white;
  width: 100%;
`;

export const ListStat = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    width: 700px;
  }
`;

export const Label = styled.span`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Percentage = styled.span`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const changesColor = (props) => {
  switch (props.id) {
    case "id-1":
      return "#4ec5f5";
    case "id-2":
      return "#a13df3";
    case "id-3":
      return "#e64c66";
    case "id-4":
      return "#20b8c3";
    case "id-5":
      return "green";
    default:
      return "white";
  }
};


export const Item = styled.li`
background-color: ${changesColor};
border: 1px solid gray;`
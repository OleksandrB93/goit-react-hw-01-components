import PropTypes from "prop-types";
import {
  StatisticsSection,
  Title,
  ListStat,
  Label,
  Percentage,
  Item
} from "./Statistics.styled";

export default function Statistics({ data }) {
  return (
    <StatisticsSection>
      <Title>Upload stats</Title>
      <ListStat>
        {data.map((item) => (
          <Item id={item.id} key={item.id}>
            <Label>{item.label}: </Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </ListStat>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

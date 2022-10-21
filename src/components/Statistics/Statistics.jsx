import PropTypes from "prop-types";

export default function Statistics({ data }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul>
        {data.map((item) => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}: </span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
};

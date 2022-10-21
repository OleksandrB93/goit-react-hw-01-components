import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((tr) => (
          <tr key={tr.id}>
            <td>{tr.type}</td>
            <td>{tr.amount}</td>
            <td>{tr.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    amount: PropTypes.string.isRequired, 
    currency: PropTypes.string.isRequired, 
  })).isRequired
};
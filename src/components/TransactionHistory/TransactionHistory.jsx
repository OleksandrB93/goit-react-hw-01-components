import PropTypes from "prop-types";
import { TransitionContainer,Thead, Tbody,Td,Tr } from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransitionContainer>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <Tbody>
        {items.map((tr) => (
          <Tr key={tr.id}>
            <Td>{tr.type}</Td>
            <Td>{tr.amount}</Td>
            <Td>{tr.currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TransitionContainer>
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
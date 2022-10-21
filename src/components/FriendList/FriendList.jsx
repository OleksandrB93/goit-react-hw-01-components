import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  const isOnline = true;
    return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item" key={friend.id}>
          <span className="status">{isOnline && friend.isOnline}</span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
        isOnline: PropTypes.bool.isRequired, 
        id: PropTypes.number.isRequired,
    }))
}
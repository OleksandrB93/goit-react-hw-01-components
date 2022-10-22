import PropTypes from "prop-types";
import { FriendListStyle, FriendItem, FriendName, Status } from "./FriendList.styled";

export default function FriendList({ friends }) {
    return (
    <FriendListStyle>
      {friends.map((friend) => (
        <FriendItem key={friend.id}>
          <Status status={friend.isOnline}>{friend.isOnline}</Status>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </FriendListStyle>
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
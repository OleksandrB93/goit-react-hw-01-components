import PropTypes from "prop-types";
import {
  Card,
  Description,
  Stats,
  StatsItem,
  Avatar,
  Name,
  Tag,
  Location,
  Label,
  Quanity
} from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers: </Label>
          <Quanity>{stats.followers}</Quanity>
        </StatsItem>
        <StatsItem>
          <Label>Views: </Label>
          <Quanity>{stats.views}</Quanity>
        </StatsItem>
        <StatsItem>
          <Label>Likes: </Label>
          <Quanity>{stats.likes}</Quanity>
        </StatsItem>
      </Stats>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
  const { username } = props;
  console.log(username, props);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Hi {username}. Welcome to the profile page</p>
      <p>Go back <Link to="/">Home</Link></p>
    </div>
  );
}

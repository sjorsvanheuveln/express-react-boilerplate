import { useSelector } from 'react-redux';

function ProfilePage() {
  const { username, email } = useSelector((state) => state.auth);

  return (
    <div className="row justify-content-center">
      <div className="col-10 col-sm-7 col-md-5 col-lg-4">
        <h1>Profile Page</h1>
        <p>Hi {username}</p>
        <p>Email: {email}</p>
        <p>Do some good testing here!</p>
      </div>
    </div>
  );
}

export default ProfilePage;

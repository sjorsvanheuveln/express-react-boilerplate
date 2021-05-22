import { useSelector } from 'react-redux';

export default function ProfilePage() {
  const { progress } = useSelector((state) => state.progress);

  return (
    <div className="row justify-content-center">
      <div className="col-10 col-sm-7 col-md-5 col-lg-4">
        <p>Progress: <b>{progress === false ? 'false' : 'true'}</b></p>
      </div>
    </div>
  );
}

import { Alert } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../../redux/error';

export default function ErrorBox() {
  const { error, isError } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  console.log('error club', error);

  function close() {
    dispatch(clearError());
  }

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <Alert color="danger" isOpen={isError} toggle={close}>
          <strong>Error:</strong> {error.message}
        </Alert>
      </div>
    </div>
  );
}

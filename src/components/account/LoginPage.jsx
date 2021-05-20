import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function LoginPage(props) {
  const { username } = props;
  return (
    <p>This is the login page, {username}.</p>
  );
}

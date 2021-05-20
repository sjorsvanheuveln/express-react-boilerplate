import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function LoginPage(props) {
  const { username } = props;
  return (
    <div className="row justify-content-center">
      <div className="col-10 col-sm-7 col-md-5 col-lg-4">
        <h1>Login Page</h1>
        <p>This is the login page, {username}.</p>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="noreply@schoolofsatoshi.nl"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
            />
          </FormGroup>
          <Button outline>Log In</Button>
        </Form>
      </div>
    </div>
  );
}

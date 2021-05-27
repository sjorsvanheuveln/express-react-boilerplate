import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import Counter from '../TestComponent';

function Content() {
  const { username, isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back, <b style={{ color: 'indigo' }}>{username}</b></h1>
        <p>You&lsquo;re now logged in!</p>
        <img src="/images/bitcoin_turn.gif" alt="bitcoin" />
      </div>
    );
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Hier is de home pagina</p>
      <p id="redTarget">Red target</p>
      <a href="/error">
        <Button color="danger">Maak error</Button>
      </a>
      <Counter />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="row justify-content-center">
      <div className="col-10 col-sm-7 col-md-5 col-lg-4">
        <Content />
      </div>
    </div>
  );
}

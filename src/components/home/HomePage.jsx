import { Button } from 'reactstrap';
import Counter from '../TestComponent';

const HomePage = () => (
  <div className="row justify-content-center">
    <div className="col-10 col-sm-7 col-md-5 col-lg-4">
      <h1>Home Page</h1>
      <p>Hier is de home pagina</p>
      <p id="redTarget">Red target</p>
      <a href="/error">
        <Button color="danger">Maak error</Button>
      </a>
      <Counter />
    </div>
  </div>
);

export default HomePage;

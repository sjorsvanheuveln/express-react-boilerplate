import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { connect } from 'react-redux';
import { registrationSuccessViewed } from '../../redux/auth';

class RegisterSuccessPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(registrationSuccessViewed());
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <br />
          <UncontrolledAlert color="success">
            Succesvolle registratie. We hebben je een verificatielink gemaild.
            Klik erop om je account te activeren.<br />
            <b>Check je spam als je hem niet ontvangen hebt!</b>
          </UncontrolledAlert>
          <br />
          <div className="row justify-content-center">
            <img src="https://www.shareicon.net/data/128x128/2015/12/15/687885_email_512x512.png" alt="mail" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(RegisterSuccessPage);

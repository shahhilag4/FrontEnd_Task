import {Container } from 'react-bootstrap';
import logo from './logo.png';
import { Image } from 'react-bootstrap';

const AdminBox = () => {

  return (
    <>
      <div className="d-flex justify-content-center align-items-end adjustheight">
        <Container className="chat-container p-3">
        <div className="chat-header">
          <Image src={logo} alt="Logo" className="logo" />
          <h6 className='logo1'>Neuralmind.io</h6>
        </div>
          <div className="chatbox">
            <h1>Welcome to Admin Page</h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AdminBox;

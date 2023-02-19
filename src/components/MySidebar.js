import React,{useState} from "react";
import { Nav } from "react-bootstrap";
import "./MySidebar.css";

function MySidebar() {
  const [activeLink, setActiveLink] = useState(
    sessionStorage.getItem('activeLink'||'')
  );

  const handleLinkClick = (index) => {
    setActiveLink(index);
    sessionStorage.setItem('activeLink',index);
  };
  return (
    <>
    <Nav  className="flex-column vh-100 bg-dark  sidebar">
      <h3>Neuralmind</h3>
      <Nav.Link className={activeLink == 0 ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick(0)} href="/">Train</Nav.Link>
      <Nav.Link className={activeLink == 1 ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick(1)} href="/chat">Chat</Nav.Link>
      <Nav.Link className={activeLink == 2 ? 'nav-link active' : 'nav-link'} onClick={() => handleLinkClick(2)} href="/admin">Admin</Nav.Link>
    </Nav>
    </>
  );
}

export default MySidebar;

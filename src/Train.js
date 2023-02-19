import React from "react";
import { Navbar} from "react-bootstrap";
import Sidebar from "./components/MySidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TrainBox from "./components/TrainBox";
import "./Train.css"

function Train() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
            <span className="navbar mx-3"><FontAwesomeIcon className="navbar icon" icon={faCaretDown} color="grey"/></span>
            <span className="navbar "><FontAwesomeIcon className="icon" icon={faUser} color="grey"/></span>
      </Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-2 mx-auto">
              <Sidebar className="sidebar"/>
              <TrainBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Train;

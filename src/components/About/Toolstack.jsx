import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
  
  SiVercel,
  SiPostman,
  SiJupyter,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
function Toolstack() {
  return (
    <Row style = {{ justifyContent: "center", paddingBottom: "50px"}}>
        <Col xs = {4} md = {2} className = "tech-icons">
            <BiLogoVisualStudio/>
        </Col>
        <Col xs = {4} md = {2} className = "tech-icons">
            <SiVercel/>
        </Col>
        <Col xs = {4} md = {2} className = "tech-icons">
            <SiPostman/>
        </Col>
        <Col xs = {4} md = {2} className = "tech-icons">
            <SiJupyter/>
        </Col>
    </Row>
  )
}

export default Toolstack

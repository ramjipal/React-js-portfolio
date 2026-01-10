import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsAward } from 'react-icons/bs';

function CertificationCard(props) {
  return (
    <Card className='project-card-view'>
        <Card.Img variant = "top" src = {props.imgPath} alt = "certification-img"/>
        <Card.Body>
            <Card.Title >{props.title}</Card.Title>
            <Card.Text style = {{ textAlign: "justify" }}>{props.description}</Card.Text>
            <Button variant = "primary" href = {props.certLink} target = "_blank">
                <BsAward/>
                {"View"}
            </Button>
        </Card.Body>
    </Card>
  )
}

export default CertificationCard

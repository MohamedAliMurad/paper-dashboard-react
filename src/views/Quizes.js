import React from 'react'
import { Card, CardBody, CardHeader, Col, Dropdown, Row } from 'reactstrap'

export default function Quizes() {
  return (
    <Row className="content">
        <Col className="bg-light border">
            <CardHeader className="bg-light">
                <h5>Generate Quiz</h5>
                <Dropdown className="bg-info text-black-50 text-right"/>
            </CardHeader>
            {/* < className="bg-light border">
                <CardBody>

                </CardBody>
            </> */}
        </Col>
    </Row>
  )
}

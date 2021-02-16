import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3" >
                        Copyright &copy; Proshop
                    </Col>
                </Row> 
            </Container>
        </footer>
    )
}

export default Footer

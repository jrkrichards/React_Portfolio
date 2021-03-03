import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Form from "../../components/Form";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Wrapper>
            <div className="p-5 container text-center top-buffer">
            <Row>
                <Col size="md-12">
                    <Form />
                </Col>
            </Row>
            </div>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Contact;

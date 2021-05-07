import React, {Fragment} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppNavbar from '../components/AppNavbar';
import CardList from '../components/card/CardList';
import { Col, Row } from 'reactstrap';

const MyRouter = () => (
    <>
        <AppNavbar />
        <p>
             <Row className="mt-5">
                <Col xs="6" sm="4"><CardList /></Col>
                <Col xs="6" sm="4"><CardList /></Col>
                <Col sm="4"><CardList /></Col>
            </Row>
            <Row className="mt-5">
                <Col xs="6" sm="4"><CardList /></Col>
                <Col xs="6" sm="4"><CardList /></Col>
                <Col sm="4"><CardList /></Col>
            </Row>
            <Row className="mt-5">
                <Col xs="6" sm="4"><CardList /></Col>
                <Col xs="6" sm="4"><CardList /></Col>
                <Col sm="4"><CardList /></Col>
            </Row>
            <Row className="mt-5">
                <Col xs="6" sm="4"><CardList /></Col>
                <Col xs="6" sm="4"><CardList /></Col>
                <Col sm="4"><CardList /></Col>
            </Row>
            
            
            
            </p>
        <Footer/>
    </>
)

export default MyRouter;
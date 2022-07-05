import React from "react";
import { Button,Col,Row, Container,Image } from "react-bootstrap";
import './css/Home.css';

function Home()
{
    return (<>
    <div className="myhome">
        <Container>
            <Row>
                <Col lg="6" sm="12">
                    <div className="hometext" >
                    <h1 >Hi I'm Richard Sugiarto</h1>
                    <h2 >Software Engineer & Website Developer</h2>
                    <br/>
                    <Button variant="dark" href="#About" size="lg">About me</Button>
                    </div>
                    </Col>
                <Col lg="6" sm="12"><Image roundedCircle src="assets/photo.png" width={400} height={400}></Image></Col>
            </Row>
        </Container>
        </div>
    </>);
}

export default Home;
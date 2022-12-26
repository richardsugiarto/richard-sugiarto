import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { publicURL } from '../utils/publicURL';
import './css/About.css';

function About() {
    return (
        <>
            <div className="myabout">
                <Container>
                    <h2
                        style={{
                            color: '#555',
                            fontFamily: 'helvetica_ce_55_romanregular',
                            fontWeight: 'bolder',
                            fontSize: '35px',
                            textTransform: 'uppercase',
                        }}
                    >
                        About
                    </h2>
                    <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                    <Row style={{ paddingTop: '10vh' }}>
                        <Col lg="6" sm="12">
                            <Image src={publicURL('/assets/neural.png')} width={400} height={300} className="i-about" />
                        </Col>
                        <Col lg="6" sm="12">
                            <p style={{ textAlign: 'justify' }}>
                                Richard Sugiarto seeking React developer positions. Besides his interest about website and software
                                engineering, he also learns deep learning. His latest work in 3D pose reconstruction required a thorough
                                understanding of the design, implementation, and evaluation process of deep learning models. Integrating
                                deep learning into website and software is an interest for him.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;

import React from "react";
import { Row,Col, Container,Image } from "react-bootstrap";
import './css/Publication.css';

function Publication()
{
    return (<>
        <div className="mypublication">
            <Container>
                <h2 style={{color:'#555',fontFamily:'helvetica_ce_55_romanregular',fontWeight:'bolder',fontSize:'35px',textTransform:'uppercase'}}>Publication</h2>
                <div style={{border:'1px solid #e73131',width:'15%',margin:'0 auto'}}></div>
                <Row style={{paddingTop:'10vh'}}>
                    <Col xxl="6" sm="12">
                       <Image src="assets/[P1].png" width={600} height={300} className="i-publication"/>
                    </Col>
                    <Col xxl="6" sm="12">
                        <p style={{textAlign:'justify'}}>
                            <b>[P1]</b> Helmet Usage Detection on Motorcyclist Using Deep Residual Learning
                            <div style={{fontFamily:'courier'}}>2021 3rd East Indonesia Conference on Computer and Information Technology (EIConCIT), IEEE</div>
                            <i><b>Richard Sugiarto</b>, Evan Kusuma Susanto, and Yosi Kristian</i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>);
}

export default Publication;
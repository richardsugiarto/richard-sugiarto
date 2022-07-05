import React from "react";
import { Row } from "react-bootstrap";
import { Container,Col } from "react-bootstrap";
import "./css/Skills.css";

function Skills()
{
    return (<>
        <div style={{height:'100%',paddingTop:'10vh',backgroundColor:'#ffffff'}}>
            <Container>
            <h2 style={{color:'#555',fontFamily:'helvetica_ce_55_romanregular',fontWeight:'bolder',fontSize:'35px',textTransform:'uppercase'}}>Skills</h2>
                <div style={{border:'1px solid #e73131',width:'15%',margin:'0 auto'}}></div>
                <Row style={{paddingTop:'10vh'}}>
                    <Col lg="4" sm="12">
                    <h3>Language</h3>
                    <p style={{textAlign:'justify'}}>English</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Chinese</p>
                    <p><div className="bartext">20%</div><div className="bar"><div className="barcontent" style={{width:'20%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Indonesian</p>
                    <p><div className="bartext">100%</div><div className="bar"><div className="barcontent" style={{width:'100%'}}></div></div></p>
                    </Col>
                    <Col lg="4" sm="12">
                    <h3>Deep Learning</h3>
                    <p style={{textAlign:'justify'}}>Python</p>
                    <p><div className="bartext">95%</div><div className="bar"><div className="barcontent" style={{width:'95%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Machine Learning</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Computer Vision</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Tensorflow-Keras</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Linux</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    </Col>
                    <Col lg="4" sm="12">
                    <h3>Website</h3>
                    <p style={{textAlign:'justify'}}>ReactJS</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Javascript</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>NodeJS Express</p>
                    <p><div className="bartext">75%</div><div className="bar"><div className="barcontent" style={{width:'75%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>AWS (VPS)</p>
                    <p><div className="bartext">50%</div><div className="bar"><div className="barcontent" style={{width:'50%'}}></div></div></p>
                    <p style={{textAlign:'justify'}}>Google Cloud (VPS)</p>
                    <p><div className="bartext">50%</div><div className="bar"><div className="barcontent" style={{width:'50%'}}></div></div></p>
                   
                    </Col>
                </Row>
            </Container>
        </div>
    </>);
}

export default Skills;
import React from "react";
import { Row,Col, Container,Image } from "react-bootstrap";
import { MDBFooter } from 'mdb-react-ui-kit';
function Contact()
{
    return (<>
        <div style={{height:'100%',paddingTop:'10vh',backgroundColor:'#ffffff'}}>
            
            <h2 style={{color:'#555',fontFamily:'helvetica_ce_55_romanregular',fontWeight:'bolder',fontSize:'35px',textTransform:'uppercase'}}>Contact</h2>
                <div style={{border:'1px solid #e73131',width:'15%',margin:'0 auto'}}></div>
                
                <div className="Footer" style={{paddingTop:'5vh'}}>
                    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>   
                          <div>
                            <a href='' className='me-4 text-reset'>
                              <i className='fab fa-google'></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                              <i className='fab fa-linkedin'></i>
                            </a>
                            <a href='' className='me-4 text-reset'>
                              <i className='fab fa-github'></i>
                            </a>
                          </div>
                        </section>

                        <section className=''>
                          <div className='container text-center text-md-start mt-5'>
                            <div className='row mt-3'>
                              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                  Language
                                </h6>
                                <p>
                                  Indonesian
                                </p>
                                <p>
                                  English
                                </p>
                                <p>
                                  Chinese
                                </p>
                              </div>

                                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                  <h6 className='text-uppercase fw-bold mb-4'>Powered with</h6>
                                  <p>
                                      ReactJS
                                  </p>
                                  <p>
                                    HTML
                                  </p>
                                  <p>
                                      CSS
                                  </p>
                                  <p>
                                      Bootstrap
                                  </p>
                                </div>
                                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                  <p>
                                     rich.sugiarto@gmail.com
                                  </p>
                                  <p>
                                  linkedin.com/in/richard-sugiarto-32b677132
                                  </p>
                                </div>
                            </div>
                         </div>
                        </section>
                        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                          © 2022 Copyright: Richard Sugiarto
                        </div>
                    </MDBFooter>
                </div>
        </div>
    </>);
}

export default Contact;
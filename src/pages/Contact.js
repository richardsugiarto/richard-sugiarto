import React from 'react';
import { Container, Grid } from '@mui/material';

function Contact() {
    return (
        <>
            <div style={{ height: '100%', paddingTop: '10vh', backgroundColor: '#ffffff' }}>
                <h2
                    style={{
                        color: '#555',
                        fontFamily: 'helvetica_ce_55_romanregular',
                        fontWeight: 'bolder',
                        fontSize: '35px',
                        textTransform: 'uppercase',
                    }}
                >
                    Contact
                </h2>
                <div style={{ border: '1px solid #e73131', width: '15%', margin: '0 auto' }}></div>
                <div className="Footer" style={{ paddingTop: '10vh',color:'white' }}>
                    <Container maxWidth="xl" style={{backgroundColor:'rgba(0, 0, 0, 0.8)',padding:'0'}}>
                        <Grid container spacing={6} >
                            <Grid item md={4} xs={12}>
                                <h6 style={{fontWeight:'bold',marginBottom:'2em',textTransform:'uppercase'}}>Language</h6>
                                <p>Indonesian</p>
                                <p>English</p>
                                <p>Chinese</p>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <h6 style={{fontWeight:'bold',marginBottom:'2em',textTransform:'uppercase'}}>Powered with</h6>
                                <p>ReactJS</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>MUI</p>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <h6 style={{fontWeight:'bold',marginBottom:'2em',textTransform:'uppercase'}}>Contact</h6>
                                <p>rich.sugiarto@gmail.com</p>
                                <p>linkedin.com/in/richard-sugiarto-32b677132</p>
                            </Grid>
                            <Grid item md={12} xs={12} style={{verticalAlign:'middle',display:'flex',justifyContent:'center',textAlign:'center',marginBottom:'1vh',backgroundColor:'rgba(0, 0, 0, 0.9)',padding:'1vh'}}>
                                © 2023 Copyright: Richard Sugiarto
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Contact;

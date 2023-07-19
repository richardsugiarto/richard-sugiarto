import React from 'react';
import { publicURL } from '../utils/publicURL';
import './css/About.css';
import { Container,Grid } from '@mui/material';

function About() {
    return (
        <>
            <div className="myabout">
                <Container max-width="xl">
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
                    <Grid container style={{ paddingTop: '10vh' }}>
                        <Grid item md={6} xs={12}>
                            <img src={publicURL('/assets/neural.png')} width={400} height={300} className="i-about" />
                        </Grid>
                        <Grid md={6} xs={12}>
                            <p style={{ textAlign: 'justify' }}>
                                Richard Sugiarto is a React enthusiast. Besides his interest about website and software
                                engineering, he also learns deep learning. His latest work in 3D pose reconstruction required a thorough
                                understanding of the design, implementation, and evaluation process of deep learning models. Integrating
                                deep learning into website and software is an interest for him.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default About;

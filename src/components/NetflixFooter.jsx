import React from 'react';
import { MDBFooter, } from 'mdb-react-ui-kit';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import { Col, Row, Container, Button } from 'react-bootstrap'

function NetflixFooter() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <Container className='text-center text-md-start mt-5'>
        <Row>
          <Col className='d-flex justify-content-center mb-3 mt-5'>
            <Facebook className='mx-3 fs-3' /> <Instagram className='mx-3 fs-3' /> <Twitter className='mx-3 fs-3' /> <Youtube className='mx-3 fs-3' />
          </Col>
        </Row>
        <Row className='mt-3 justify-content-center'>
          <Col md='2' lg='2' className='mb-4'>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Media Center
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Privacy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Contact Us
              </a>
            </p>
            <Button className="square rounded-0" variant="outline-light">Service Code</Button>
          </Col>

          <Col md='2' lg='2' className='mb-4'>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Audio Description
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Investors Relations
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Legal Notices
              </a>
            </p>
          </Col>

          <Col md='3' lg='2' className='mb-4'>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Help Center
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Job
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Cooki Preferences
              </a>
            </p>
          </Col>

          <Col md='3' lg='2' className='mb-4'>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Gift Cards
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Terms of Use
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Corporate Information
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      <div className='text-center p-4 copyright'>
        © 2023 Copyright:
        <a className='text-reset text-decoration-none fw-bold' href='https://github.com/Luigi-stack'>
          Luigi-stack
        </a>
      </div>
    </MDBFooter>
  );
}

export default NetflixFooter
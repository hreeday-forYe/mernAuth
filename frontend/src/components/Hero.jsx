import React from 'react'
import {Container, Card,Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'
const Hero = () => {
  const {userInfo} = useSelector((state)=>state.auth);
  return (
    <>
      <div className='py-5'>
        <Container className='d-flex justify-content-center'>
          <Card className='d-flex p-5 flex-column align-items-center bg-light hero-card w-75'>
            <h1 className='text-center mb-4'>MERN Authentication</h1>
            <p className='text-center mb-4'>This is the boiler plate I created before starting my fucking 
            MERN stack app and I hope I can use it in my final year project I am going to create in future
            </p>
            {userInfo? (
              <>
                <Card>
                <Card.Header>Status</Card.Header>
                <Card.Body>
                  <Card.Title>You are already Logged in</Card.Title>
                  <Card.Text>
                    Well looks like you have already created your account and secured your cookie
                  </Card.Text>
                  <LinkContainer to={'/profile'}>
                    <Button variant="primary">Visit Profile</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
              </>
              ): (
              <>
                <div className='d-flex'>
                <LinkContainer to={"/login"}>
                  <Button variant='primary' href='/login'className='me-3' >Sign in</Button>
                </LinkContainer>
                <LinkContainer to={"/register"}>
                  <Button variant='secondary' href='/register'className='me-3' >Sign Up</Button>
                </LinkContainer>
              </div>
              </>
            )}
            
          </Card>
        </Container>
      </div>
    </>
  )
}

export default Hero
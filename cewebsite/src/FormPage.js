import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import './App.css';
import './component/Inter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
function FormPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
   
    <Container fluid style={{ background: 'linear-gradient( #EC7D30, #3F3F3F,#05060A)',padding:0, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', width: '100%' }}>
        <h2 style={{
          backgroundColor: 'black',
          color: 'white',
          width: '60%',
          height: '127px',
          margin: '30px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '28px',
          fontSize: '50px',
          textAlign: 'center', 
        }}>Join Computer Club</h2>
      </div>

      <Form style={{ width: '100%', marginBottom: '20px' }} onSubmit={handleSubmit}>
        <Row className="justify-content-center" style={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Col xs={12} md={8} lg={6}>
            <Form.Group controlId="formGmail">
              <Form.Label style={{ color: 'white' }}></Form.Label>
              <Form.Control type="email" placeholder="GMAIL:" 
                style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginLeft: '-25%' }}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label style={{ color: 'white' }}></Form.Label>
              <Form.Control type="password" placeholder="PASSWORD:" 
                style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)',width: '150%', height: 50, borderRadius: 28,marginLeft: '-25%' }}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="ชื่อ:" 
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginLeft: '-51%',fontFamily: 'Prompt, sans-serif' }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formStudentId">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="รหัสนักศึกษา:" 
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginRight: '-40%',fontFamily: 'Prompt, sans-serif'}}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Col>
                <Form.Group controlId="formFaculty">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="คณะ:"  
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginLeft: '-51%',fontFamily: 'Prompt, sans-serif' }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDepartment">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="สาขา:" 
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginRight: '-40%',fontFamily: 'Prompt, sans-serif' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formReason">
              <Form.Label style={{ color: 'white' }}></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="เหตุผลที่อยากเข้าชมรม:" 
                style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '149%', height: 150, borderRadius: 28,marginLeft:'-25%',fontFamily: 'Prompt, sans-serif'}}
              />
            </Form.Group>

            <Button variant="dark" type="submit" 
              style={{ marginTop: '20px', backgroundColor: '#EC7D30', color: '#000000', borderRadius: 16,fontSize:25, fontWeight: 'bold' }}>SUBMIT</Button>
          </Col>
        </Row>
      </Form>

      <Footer/>
    </Container>
  );
}

export default FormPage;

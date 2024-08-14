import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Menu from './Menu'; // นำเข้าเมนูจากไฟล์ที่สร้างใหม่
import Footer from './component/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ background: 'linear-gradient( #EC7D30, #3F3F3F,#05060A)', padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px 30px', borderRadius: '10px', textAlign: 'center', marginTop: '20px', width: 500, height: 300, boxShadow: 'initial' }}>
        <h1 style={{ color: '#EC7D30', padding: '30px 30px' }}>-SUBMITTED-</h1>
        <h2>THANK YOU</h2>
        <h2>FOR APPLYING!!!</h2>
      </div>
      <Button variant="dark" type="submit" 
              style={{ marginTop: '0px', backgroundColor: '#EC7D30', color: '#000000', borderRadius: 16, fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/')}>RETURN</Button>
      <Footer />
    </Container>
  );
}

export default ThankYouPage;

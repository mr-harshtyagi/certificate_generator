import Sidebar from './Sidebar';
import { Container,Row, Col } from 'react-bootstrap';
import SideForm from './SIdeForm';
import Certificate from './Certificate';
import Terminal from './terminal';

export default function App(){
    return (
      <>
        <Container style={{margin:"0",padding:"0"}}>
          <Row>
            <Col lg="1">
              {" "}
              <Sidebar />{" "}
            </Col>
            <Col lg="3" >
              <SideForm />
            </Col>
            <Col lg="8">
            <Certificate/>
            <Terminal/>
            </Col>
          </Row>
        </Container>
      </>
    );
}


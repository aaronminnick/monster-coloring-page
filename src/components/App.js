import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PartsSideBar from './PartsSidebar.js';
import SaveExportSideBar from './SaveExportSidebar.js';
import ColoringPage from './ColoringPage.js';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="col-1">
            <PartsSideBar />
            <SaveExportSideBar />
          </Col>
          <Col className="col-11">
            <ColoringPage />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
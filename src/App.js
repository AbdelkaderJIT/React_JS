import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import {prod} from "./product"

function App() {
  return (
<>
<div style={{ display:'flex', justifyContent:'center', paddingTop:'100px' }}>

    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><Name/></ListGroup.Item>
        <ListGroup.Item><Price/></ListGroup.Item>
        <ListGroup.Item><Description/></ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    <Image />
    <div>
  {
    prod.name ? (<p>hello {prod.name}</p>):(
      <>
    <p>hello there</p>
    <Image />
    </>
    )
  }
      
    </div>
    </>
  );
}

export default App;

import React, {  useEffect } from "react";
import useWebSocket from 'react-use-websocket';
import { useState } from 'react';
import { Nav,
  NavbarText,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Table,
  Container,
  Row
} from 'reactstrap';

function App() {
const [lastUpdate,setLastUpdate] = useState('');
const [listPrice,setListPrice] = useState([]);

  let  { lastJsonMessage, sendMessage } = useWebSocket(`ws://${process.env.REACT_APP_API_URL}`, {
 protocols: 'echo-protocol',
  onOpen: () => console.log(`Connected to App WS`),
    onMessage: (a) => {
      try {
        if (a.data) {
          let response = JSON.parse(a.data);
          if(response.code == 200){
            setListPrice(response.data);
          }
          setLastUpdate(new Date().toLocaleString());
        }
      } catch (error) {
        console.log(error);
      }
     
    },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });


  useEffect(()=> {
    setInterval(() => {
        sendMessage(JSON.stringify({command:1}));
    }, 5000);
  }, []);

  const createTable = () => {
    if(listPrice.length > 0){
      return listPrice.map(elem=>{
        return (
          <tr key={elem.coin}>
            <td>{elem.coin}</td>
            <td>{elem.ask}</td>
            <td>{elem.bid}</td>
            <td>{elem.spread}</td>
          </tr>
        );
      });
    }
  };

const createNavBar = () => {
  return (
  <div>
    <Navbar
       color="dark"
       dark
      expand="md"
    >
      <NavbarBrand href="/">
        Coin market
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
        </Nav>
        <NavbarText>
          Last update: {lastUpdate} 
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>);
}
  return (
    <div className="App">
   {createNavBar()}
  <Container>
    <br></br>
  <Row>
    <Table responsive bordered>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Ask</th>
            <th>Bid</th>
            <th>Spread</th>
          </tr>
        </thead>
        <tbody>
          {createTable()}
        </tbody>
    </Table>
  </Row>
  </Container>
  </div>
  );
}

export default App;
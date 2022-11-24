import propsStore from "../stores/propsStore";
import Prop from "./Prop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import {Input} from 'semantic-ui-react'


export default function Props() {
  const store = propsStore();
  console.log(store.props);

  const [searchTerm, setSearchTerm] = useState("");

  return (

    <div style={{ padding: 20 }}>
      


      
      
    <Container fluid>
        <Row>
          <Col>
          
            <h2>My Property</h2>
          </Col>

          <Col align="right">

            <h6>Logged in as: 
              {store.user ? (
                <span>&nbsp;{store.user.fname} {store.user.lname} &nbsp;</span>
              ) : (
                <span>Guest</span>
              )}
                <Button variant="success" size="sm" href="/logout">Log Out</Button>&nbsp;</h6>
                <br />
                <Input icon='search' 
                  placeholder='Search Property...' 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onBlur={(e) => setSearchTerm("")}
                />


          
          </Col>

        </Row>

        <Row>
          <Col>
            <div align="center">
              {/* <SearchBar props={propsSearch} setPropsSearchResults={setPropsSearchResults} /> */}
              
              <br />
          </div>
          </Col>
        </Row>

      <Row>
        <Col xs={4}>
          <h4>Item</h4>
        </Col>
        <Col xs={2}>
        <h4>Value</h4>
        </Col>
        <Col xs={4}>
        <h4>Date Aquired</h4>
        </Col>
        <Col xs={2}>
        <h4 className="text-center">Actions</h4>
        </Col>
      </Row>
        <Row>
            <Col>
                <div align="center">
                    <br />
                    </div>
            </Col>
        </Row>
      <Row>
        <Col>
        
        {store.props &&
    
    store.props.filter((prop) => {
      if (searchTerm == "") {
        console.log("empty");
        return prop;
      } else if (prop.item.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log("search term");
        return prop;
      }
    }).map((prop) => (
      console.log("map"),
      <Prop prop={prop} key={prop._id} />
    ))}

        </Col>
      </Row>
      <Row>
        <Col>
              &nbsp;
        </Col>
      </Row>
    </Container>
    </div>

  );  
}
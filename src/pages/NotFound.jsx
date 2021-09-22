import * as React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

const NotFound=()=>{
    return(
        <Alert variant="danger" className='NotFound'>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>
    );
}

export default NotFound;
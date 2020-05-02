import React from 'react';
import {Alert} from 'react-bootstrap';
const Error = () => {
    return ( 
        <Alert variant="danger"> 
        Hay un problema y no se pudo ejecutar la consulta!
        </Alert> 
    );
}
 
export default Error;
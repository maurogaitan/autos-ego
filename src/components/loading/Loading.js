import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loading = () => {
    return ( 
        <div className="d-flex justify-content-center align-items-center loading-section">
            <Spinner  animation="border" variant="primary"  className="m-t-5" />
        </div>
     );
}
 
export default Loading;
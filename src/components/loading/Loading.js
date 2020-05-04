import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loading = () => {
    const style = {
        marginTop:'50vh'
    }
    return ( 
        <div className="d-flex justify-content-center align-items-center loading-section" style={style}>
            <Spinner animation="border" size="xl" />
        </div>
     );
}
 
export default Loading;
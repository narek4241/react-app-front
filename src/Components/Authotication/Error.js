import React from 'react';

const Error = ({touched, message}) => {
    if(!touched) {
        return <div>{null}</div>
    }
    if(message) {
    return <div style={{color:'red', fontSize: '10px', margin: '0', padding: '0'}}>{message}</div>
    }
    return <div>{null}</div>
}

export default Error
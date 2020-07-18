import React from 'react';

const Error = ({touch, error}) => {
    if(!touch){
        // return <div>(required)</div>
        return "";
    }
    if(error){
        // return <p>{error}</p>
        return <div style={{width:'100%', margin:'2.5px 0px', paddingLeft:'5px',backgroundColor: "#8a0303"}}>{error}</div>
    }
    return (<div>{null}</div>);
}  

export default Error;







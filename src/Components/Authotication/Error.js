import React, { Component } from 'react';

// class Error extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}

//         this.touch = props.touch;
//         this.error = props.error;
//     }
//     render() {
//         if (!this.touch) {
//             // return <div>(required)</div>
//             return "";
//         }
//         if (this.error) {
//             return <div style={{ width: '100%', margin: '2.5px 0px', paddingLeft: '5px', backgroundColor: "#8a0303" }}>{this.error}</div>
//         }
//         return (<div>{null}</div>);
//     }
// }

// export default Error;

const Error = ({touch, error}) => {
    if(!touch){
        return "";
    }
    if(error){
        return <div style={{width:'100%', margin:'2.5px 0px', paddingLeft:'5px',backgroundColor: "#4d0000"}}>{error}</div>
    }
    return (<div>{null}</div>);
}  

export default Error;







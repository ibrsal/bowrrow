import React from "react";
import { QRCode } from "react-qr-svg";

class Qr extends React.Component {
    constructor(props){
        super(props);
       
        this.state = {
            value : this.props.value
        }

    }
    
    render() {
        return (
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="H"
                style={{ width: 200 }}
                value={`${this.state.value}`}
            />
        );
    }
}
export default Qr
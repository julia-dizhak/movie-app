import React from 'react';

export default class AutoScalingText extends React.Component {
    state = {
        scale: 1
    };

    componentDidUpdate() {
        const {scale} = this.state;
        const node = this.node;
        const parentNode = node.parentNode;

        const availableWidth = parentNode.offsetWidth;
        const actualWidth = node.offsetWidth;
        const actualScale = availableWidth / actualWidth;

        if (scale == actualScale) {
            return true;
        }


       
        console.log(node);
        console.log(actualWidth);
        debugger;

    }
    

    render() {
        const {scale} = this.state;
        const {children} = this.props;
        
       

        return (
            <div 
                className="test"
                style={{transform: `scale(${scale},${scale})`}}
                ref={node => (this.node = node)}>
                {children}
                
            </div>
        )
    }
}

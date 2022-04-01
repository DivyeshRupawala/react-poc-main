import React from "react";

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);              
    }

    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 300, 300);        

        ctx.fillStyle = "red"; 
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "green"; 
        ctx.fillRect(15, 15, 50, 50);
        
    }
    render() {
         return (
             <canvas ref="canvas" width={300} height={300}/>
         );
    }
}
// class CanvasComponent extends React.Component {

//     constructor(props) {
//         super(props);              
//       }
    
//     componentDidMount() {
//         const canvas = this.refs.canvas
//         const ctx = canvas.getContext("2d")
//         const img = this.refs.image        
//         img.onload = () => {
//           ctx.drawImage(img, 0, 0)
//           ctx.font = "40px Courier"
//           ctx.fillText(this.props.text, 210, 75)
//         }
//     }

//     render() {
//       return(
//         <div>
//           <canvas ref="canvas" width={640} height={425} />
//           <img ref="image" src="https://via.placeholder.com/640x425" className="hidden" style={{display:"none"}}/>
//         </div>
//       )
//     }
// }

export default CanvasComponent
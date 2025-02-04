function BoxColor(props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        height: `100px`,
        textAlign: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    }

    function rgbToHex(r, g, b) {
 
        let red = r.toString(16).padStart(2, '0'); // FF
        let green = g.toString(16).padStart(2, '0'); // C0
        let blue = b.toString(16).padStart(2, '0'); // CB
       
        return '#' + red + green + blue; // #FFC0CB
       
      }

    return (
        <div className="box" style={divStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            {rgbToHex(props.r, props.g, props.b)}
        </div>
    )

}

export default BoxColor;
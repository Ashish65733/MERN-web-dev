export default function ItemPrice({ oldPrice, newPrice }) {
    let oldStyle = {
        textDecoration : "line-through",
        color : "red"
    };
    let newStyle = {
        fontWeight : "bold",
    };
    let Style = {
        backgroundColor : "#e0c367",
        height : "30px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",
        padding: "10px 10px 0px 10px"
    }
    
    return (
        <div style={Style}>
            <span style={oldStyle}>Old Price: ${oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>New Price: ${newPrice}</span>
        </div>
    )
}
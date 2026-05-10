import ItemPrice from "./ItemPrice";
import "./ItemCard.css";

export default function ItemCard({ title , idx}) {
    let oldPrice = ["12,495", "15,999", "9,999", "19,999"];
    let newPrice = ["9,999", "12,499", "7,999", "14,999"];
    let itemFeatures = [
        ["4GB RAM", "64GB Storage", "5000mAh Battery"],
        ["6GB RAM", "128GB Storage", "6000mAh Battery"],
        ["3GB RAM", "32GB Storage", "4000mAh Battery"],
        ["8GB RAM", "256GB Storage", "7000mAh Battery"],
    ];

    return (
        <div className="itemCard">
            <h4>{title}</h4>
            <p>{itemFeatures[idx][0]}</p>
            <p>{itemFeatures[idx][1]}</p>
            <p>{itemFeatures[idx][2]}</p>
            <ItemPrice oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}
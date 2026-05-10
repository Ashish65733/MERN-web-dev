import ItemCard from "./ItemCard";
import "./ItemGrid.css";

function ItemGrid() {
    return (
        <div className="itemGrid">
            <ItemCard title="Redmi Note 10 Pro" idx={0} />
            <ItemCard title="Realme 8 Pro" idx={1} />
            <ItemCard title="Redmi Note 10" idx={2} />
            <ItemCard title="Realme Narzo 30 Pro" idx={3} />
        </div>
    )
}

export default ItemGrid;
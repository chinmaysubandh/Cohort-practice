import { useState } from "react";


function InventoryApp() {
    const [items, setItems] = useState([
        { id: 1, name: "Printer", category: "Electronics", quantity: 5 },
        { id: 2, name: "Desk Chair", category: "Furniture", quantity: 30 },
        { id: 3, name: "Laptop", category: "Electronics", quantity: 50 },
        { id: 4, name: "Notebook", category: "Stationery", quantity: 100 },
    ]);
    const [filter, setFilter] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [newItem, setNewItem] = useState({
        name: "",
        category: "",
        quantity: "",
    });

    const addItem = () => {
        if (newItem.name && newItem.category && newItem.quantity) {
            setItems([
                ...items,
                {
                    id: Date.now(),
                    name: newItem.name,
                    category: newItem.category,
                    quantity: parseInt(newItem.quantity),
                },
            ]);
            setNewItem({ name: "", category: "", quantity: "" });
        }
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const filteredItems = filter
        ? items.filter((item) =>
            item.category.toLowerCase().includes(filter.toLowerCase())
        )
        : items;

    const sortedItems = [...filteredItems].sort((a, b) =>
        sortAsc ? a.quantity - b.quantity : b.quantity - a.quantity
    );

    return (
        <div
            style={{
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                maxWidth: "800px",
                margin: "auto",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#4A90E2" }}>
                Inventory Management
            </h1>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Item name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    style={{
                        padding: "10px",
                        flex: 1,
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    style={{
                        padding: "10px",
                        flex: 1,
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                    style={{
                        padding: "10px",
                        flex: 1,
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <button
                    onClick={addItem}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Add Item
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                }}
            >
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Stationery">Stationery</option>
                </select>
                <button
                    onClick={() => setSortAsc(!sortAsc)}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#7E57C2",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Sort by Quantity {sortAsc ? "↑" : "↓"}
                </button>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={headerStyle}>Name</th>
                        <th style={headerStyle}>Category</th>
                        <th style={headerStyle}>Quantity</th>
                        <th style={headerStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map((item) => (
                        <tr
                            key={item.id}
                            style={{
                                backgroundColor: item.quantity < 10 ? "#FFEBEE" : "white",
                            }}
                        >
                            <td style={cellStyle}>{item.name}</td>
                            <td style={cellStyle}>{item.category}</td>
                            <td style={cellStyle}>{item.quantity}</td>
                            <td style={cellStyle}>
                                <button
                                    onClick={() => deleteItem(item.id)}
                                    style={{
                                        backgroundColor: "white",
                                        color: "black",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        marginRight: "10px",
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
const headerStyle = {
    backgroundColor: "black",
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #ccc",
};

const cellStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "black"
};

export default InventoryApp;
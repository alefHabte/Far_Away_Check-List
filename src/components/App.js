import { useState } from "react";
import Footer from "./Footer";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";

// const initialItems = [
//   { id: 1, description: "Passport", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 2, packed: true },
//   { id: 3, description: "books", quantity: 2, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(newItems) {
    setItems((item) => [...item, newItems]);
    console.log(items);
  }
  function handleDelete(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }
  function handleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteAll() {
    const sure = window.confirm("are you sure you want to remove");
    if (sure) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onCheck={handleCheck}
        onDeleteAll={handleDeleteAll}
      />
      <Footer items={items} />
    </div>
  );
}

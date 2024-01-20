import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newContent = { description, amount, id: Date.now(), packed: false };
    onAddItem(newContent);

    setDescription("");
    setAmount(1);
  }
  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need</h3>
      <form>
        <select
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

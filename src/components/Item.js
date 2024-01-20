export default function Item({ item, onDeleteItem, onCheck }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onCheck(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.amount} {item.description} {""}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

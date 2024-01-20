export default function Footer({ items }) {
  const itemLength = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((itemPacked / itemLength) * 100);
  return (
    <footer className="stats">
      <em>
        💼 You have {itemLength} on your list, and you already have packed{" "}
        {itemPacked} ({packedPercentage}%)
      </em>
    </footer>
  );
}

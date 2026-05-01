export default function Menu() {
  const items = [
    { name: "Vanilla Cloud", price: "$3" },
    { name: "Chocolate Wave", price: "$3.5" },
    { name: "Strawberry Splash", price: "$4" },
    { name: "Rainbow Sundae", price: "$5" },
  ];

  return (
    <div className="container">
      <h1>🍦 Ice Cream Menu</h1>

      {items.map((item, i) => (
        <div className="card" key={i} style={{ marginBottom: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}
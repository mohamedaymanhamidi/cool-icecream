export default function Home() {
  return (
    <div className="container">
      <h1>🍦 Welcome to Cool Ice Cream Truck</h1>

      <p>
        The happiest ice cream truck in Virginia — fresh flavors, beach vibes,
        and fun for everyone!
      </p>

      <div className="card">
        <h2>🌊 Today’s Mood: Summer Fun</h2>
        <p>Find us around Virginia beaches & parks!</p>

        <button className="btn">📍 Find Us Today</button>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>🍓 Fan Favorite</h2>
        <p>Strawberry Wave Cone 🍓 + Vanilla Cloud 🍦</p>
      </div>
    </div>
  );
}
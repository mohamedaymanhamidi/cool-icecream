import img1 from "../assets/ice1.jpg";
import img2 from "../assets/ice2.jpg";
import img3 from "../assets/ice3.jpg";

export default function Gallery() {
  return (
    <div className="container">
      <h1>📸 Our Vibes</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        
        {[img1, img2, img3].map((img, i) => (
          <div className="card" key={i}>
            <img 
              src={img} 
              alt="ice cream" 
              style={{ width: "100%", borderRadius: "15px" }} 
            />
          </div>
        ))}

      </div>
    </div>
  );
}
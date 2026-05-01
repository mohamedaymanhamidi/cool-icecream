import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

export default function Gallery() {
  return (
    <div className="container">
      <h1>📸 Our Vibes</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        
        {[img1, img2, img3, img4].map((img, i) => (
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
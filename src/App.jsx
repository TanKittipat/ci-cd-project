import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-[76.5vh]"
        style={{
          backgroundImage: "url(./hero.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              ระบบเยี่ยมบ้านโรงเรียนบางแพปฐมพิทยา
            </h1>
            {/* Mockup page Edit EIEI*/}
            <button className="btn btn-neutral">ลงชื่อเข้าใช้งาน</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import CreateRoutes from "./routes/Route";
import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
       <nav>
        <Navbar/>
      </nav>
      <CreateRoutes />
      <Footer/>
    </div>
  );
}

export default App;

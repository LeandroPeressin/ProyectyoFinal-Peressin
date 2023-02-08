import NavBar from "./components/NavBar";
import Body from "./components/Body"
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer  greeting={"Lo sentimos, aún no contamos con stock."}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;

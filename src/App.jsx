import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content></Content>
      <Footer />
    </div>
  );
};

export default App;

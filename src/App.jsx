import Header from "./components/header.jsx";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const myLogo = (
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo" alt="React logo" />
    </a>
  );
  return (
    <>
      <Header logo={myLogo} title="Mi Aplicación" />
      <main className="p-8 bg-gray-100"></main>
    </>
  );
}

export default App;

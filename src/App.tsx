import "./index.css";
import ButtonGradient from "../public/assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"></div>
      <Header />

      <ButtonGradient />
    </>
  );
};

export default App;

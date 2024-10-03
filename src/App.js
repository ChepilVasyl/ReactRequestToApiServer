import logo from './logo.svg';
import './App.css';
import TryingComponent from "./MyComponents/TryingComponent";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import ToastifyComponentJS from "./Helpers/ToastifyComponentJS";

function App() {
  return (
      <>
          <TryingComponent/>
          <ToastContainer/>
      </>
  );
}

export default App;

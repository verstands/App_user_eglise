import IndexRoute from "./routes/indexRoute";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

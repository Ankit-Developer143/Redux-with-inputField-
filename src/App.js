import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

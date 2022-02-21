import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthPage from "./components/AuthPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

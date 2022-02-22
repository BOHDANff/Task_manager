import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";
import PrivatePath from "./hoc/PrivatePath";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkAuth} from "./store/reducers/actionCreators/AuthActionCreator";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
            if (localStorage.getItem('token')) {
                dispatch(checkAuth())
            }}, [dispatch])
  return (
    <div className="App">
        <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/" element={<PrivatePath><MainPage/></PrivatePath>}/>
        </Routes>
    </div>
  );
}

export default App;

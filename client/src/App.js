import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";
import PrivatePath from "./hoc/PrivatePath";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./store/reducers/actionCreators/AuthActionCreator";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    }, [])
  return (
    <div className="App">
        <Routes>
            <Route path="/tasks/:id" element={<PrivatePath><MainPage/></PrivatePath>}/>
            <Route path="/" element={<AuthPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

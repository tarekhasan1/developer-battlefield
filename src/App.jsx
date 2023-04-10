import { Outlet } from "react-router-dom";
import "./App.scss";
// components import
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;

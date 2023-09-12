import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Signin from "./Components/Signin";
import Signout from "./Components/Signout";
import Dashboard from "./Components/Dashboard";

import HOC_PRODUCT from "./Components/HOC_PRODUCT";

function App() {
    return (
        <>
            <Header />

            <Routes>
                
                <Route path="/" element={<HOC_PRODUCT child={Home} />} />
                <Route path="/shop" element={<HOC_PRODUCT child={Shop} />} />
                <Route
                    path="/shop/:id"
                    element={<HOC_PRODUCT child={Detail} />}
                />

                <Route path="/signin" element={<Signin />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;
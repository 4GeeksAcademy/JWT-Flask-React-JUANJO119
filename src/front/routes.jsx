// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivatePage from "./pages/PrivatePage";

export default function App() {
  function logout() {
    sessionStorage.removeItem("access_token");
    window.location.href = "/login";
  }

  return (
    <BrowserRouter>
      <nav style={{padding:12, borderBottom:"1px solid #ddd"}}>
        <Link to="/signup" style={{marginRight:8}}>Signup</Link>
        <Link to="/login" style={{marginRight:8}}>Login</Link>
        <Link to="/private" style={{marginRight:8}}>Private</Link>
        <button onClick={logout} style={{marginLeft:12}}>Logout</button>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/private" element={<PrivatePage/>}/>
        <Route path="*" element={<div style={{padding:20}}>Ruta pública. Usa /signup o /login.</div>}/>
      </Routes>
    </BrowserRouter>
  );
}
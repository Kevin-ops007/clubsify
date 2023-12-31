import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClubPage from "./Components/Club/ClubPage";
import Login from "./Components/Login/login";
import ClubInfo from "./Components/club_more_info/ClubInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/clubs" element={<ClubPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        {/* add clubInfo to routes */}
        <Route path="/clubInfo" element={<ClubInfo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

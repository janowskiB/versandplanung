import React from "react";
import "./App.css";
import CustomerList from "./pages/CustomerList";
import EmployeeList from "./pages/EmployeeList";
import FleetList from "./pages/FleetList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RouteList from "./pages/RouteList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/fleets" element={<FleetList />} />
        <Route path="/routes" element={<RouteList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

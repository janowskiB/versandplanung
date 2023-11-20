import React from 'react';
import './App.css';
import CustomerList from "./components/CustomerList";
import EmployeeList from "./components/EmployeeList";
import FleetList from "./components/FleetList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/fleets" element={<FleetList/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<App />} />
            <Route path="/skills" element={<App />} />
          </Routes>
      </BrowserRouter>;
}
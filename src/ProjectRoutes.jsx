import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { ShowCard } from "./pages/ShowCard";

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card" element={<ShowCard />} />
      </Routes>
    </BrowserRouter>
  )
};

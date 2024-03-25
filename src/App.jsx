import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetailPage from "./pages/videoDetailPage";
import { NavbarProvider } from "./components/navbarContext";
export default function App() {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/videoDetail/:id" element={<VideoDetailPage />} />
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}

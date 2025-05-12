import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Toaster from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;

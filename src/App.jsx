import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MyPage from "./pages/MyPage";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <MyPage />
      <Footer />
    </>
  );
}

export default App;

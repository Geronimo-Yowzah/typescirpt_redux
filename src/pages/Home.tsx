import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Post from "./Post";

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default Home;

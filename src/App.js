import React from "react";
import Home from "./Components/Home";
import { Routes,Route } from "react-router-dom";
import AddFriend from "./Components/AddFriend";
function App() {
  return (
   <>
    <Routes>
 <Route path="/" element={<Home />}/>
 <Route path="/AddFriend" element={<AddFriend />} />
    </Routes>

   
   </>
  );
}

export default App;

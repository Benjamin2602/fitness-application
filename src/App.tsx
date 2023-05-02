
import Navbar from "@/scenes/navbar";
import { useState } from "react";
useState
function App() {

  const [selectedPage, setSelectedPage] = useState("home");

  return (
      <div className="app bg-gray-20">
        <Navbar 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}

        />
      </div>
    
  )
}

export default App

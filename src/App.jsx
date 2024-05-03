import React from "react";
import Header from "./components/Header/Header";
import Routing from "./Routing";

function App() {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main className="h-screen">
          <Routing />
        </main>
      </div>
    </div>
  );
}

export default App;

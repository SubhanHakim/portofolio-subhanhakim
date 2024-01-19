// import { useState } from "react";
import Menubar from "../partials/menuBar";


export default function Navbar() {


  return (
    <nav className="mx-[100px] relative">
      <div className="flex justify-between items-center py-10">
        <div className="font-primary text-grayColor text-2xl">
          <h3 className="uppercase text-2xl">Subhan Hakim</h3>
        </div>
        <Menubar />
      </div>

    </nav>
  );
}

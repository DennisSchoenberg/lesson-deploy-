import React from "react";
import "./Lesson06.css";
//import { brotherhood } from "./lesson06/data";
import { v4 } from "uuid";
//import { Info } from "./independent/info";
import { fruits } from "./fruitCard/fruit";
//import Card from "./independent/Card";
import Card1 from "./fruitCard/Card1";

const Lesson06 = () => {
    // console.log(Info)
  return (
    <div>
      <h1>Lesson 06</h1>
      {fruits.map((njam) => (
       <Card1 key={v4()} njam={njam}/>
      ))};     
    </div>

  );
};

export default Lesson06;
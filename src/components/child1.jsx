import React from "react";
import style from "./child1.module.css";
import Popbox from "./popbox";
const Child1 = () => {
  //   let arr1 = [
  //     { h1: "Explore Design Work ", p: " Trending Design to Inspire you" },
  //     { h1: "New and NoteWorthy ", p: " Up and Coming Designers" },
  //   ];
  let arr1 = [
    { h1: "Explore Design Work", p: "Trending Design to inspire you" },
    { h1: "New & Noteworthy", p: "Up-and-Coming Designers" },
  ];
  let arr2 = [
    { h1: "Job Board", p: "Find your dream design Job" },
    { h1: "Freelance Projects", p: "An exclusive list for contract work" },
  ];
  return (
    <div className={style.child1}>
      <h2 className={style.logo}>Logo</h2>
      <Popbox text={"Inspiration"} arr={arr1} />
      <Popbox text={"Find Work"} arr={arr2}/>
      <p className={style.nonpop}>Learn Design</p>
      <p className={style.nonpop}>Hire Designers</p>
    </div>
  );
};

export default Child1;

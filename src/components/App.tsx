import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import formulaCar from "@/assets/image1.jpeg";
import ExampleSvg from "@/assets/star.svg";
function todo() {
  todo2()
  return 2;
}
function todo2() {
  throw new Error()
}
export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(
    // (prev) => prev + 1
  todo()
  );
  // if (_PLATFORM_ === 'desktop') {
  //   return (
  //     <div>ISMOBILEPLATFORM</div>
  //   )
  // }
  // if (_PLATFORM_ === 'mobile') {
  //   return (
  //     <div>ISDESKTOPLATFORM</div>
  //   )
  // }
  return (
    <div data-testid={"AppDataTestId"}>
      <h1 data-testid={"Platform"}>PLATFORM={_PLATFORM_}</h1>
      <img src={formulaCar} alt="Formula 1" />
      <div>
        <ExampleSvg width={100} height={100} fill={"green"} />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>inc</span>
      </button>
      <div>Hello world!</div>
      <Outlet />
    </div>
  );
};

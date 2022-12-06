import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="container-fluid">
        <div className="conatiner">
          <div className="Hero_heroContent">
            <h1>Real-World DeFi</h1>
            <p className="my-4 my-md-5">
              Unlocking liquidity for real world assets</p>
            <div>
              <Link to="/articles" >EXPLORE</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

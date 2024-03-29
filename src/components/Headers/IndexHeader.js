/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/biglogo.png") + ")"
        }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">creatAbility Project</h1> */}
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
              {/* Every need is special */}
            </h2>
          </Container>
        </div>
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        /> */}
        {/* <h6 className="text-primary">
          <span className="">created by {" "}</span>
          <a href="https://github.com/Jiangyiqun/creatAbility"
            target="_blank">
            teamA
          </a> */}
            {/* <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            /> */}
        {/* </h6> */}
      </div>
    </>
  );
}

export default IndexHeader;

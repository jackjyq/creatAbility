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
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, HashRouter } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import WheelCare2 from "views/examples/Projects/WheelCare2.js";
import CreatePage from "views/examples/CreatePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
    <HashRouter>
        <Route exact path="/" component={ Index } />
        <Route exact path="/index" component={ Index } />
        <Route exact path="/create" component={ CreatePage } />
        <Route exact path="/projects/WheelCare2" component={ WheelCare2 } />
    </HashRouter>,
  document.getElementById("root")
);
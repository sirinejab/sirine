import React,{Component} from "react";

import {Route , NavLink , HashRouter} from "react-router-dom"
import Contact from "./Contact";
import galerie from "./galerie";
import Home from "./Home";
import maps from "./maps";
import Stuff from "./Stuff";


class Main extends Component{

render(){

return (
<HashRouter>
<div>
<h1>Simple SPA</h1>
<ul className="header">
<li><NavLink exact to="/"> Home</NavLink></li>

<li><NavLink to="/stuff"> Stuff</NavLink></li>
<li><NavLink to="/contact"> Contact</NavLink></li>
<li><NavLink to="/maps"> maps</NavLink></li>
<li><NavLink to="/galerie"> galerie</NavLink></li>
</ul>
<div className="content">
<Route exact path="/" component={Home}/>
<Route path="/stuff" component={Stuff}/>
<Route path="/contact" component={Contact}/>
<Route path="/maps" component={maps}/>
<Route path="/galerie" component={galerie}/>

</div>
</div>
</HashRouter>

);

}
}
export default Main;













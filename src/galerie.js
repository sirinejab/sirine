import React,{Component} from "react";
import logo from './logo.jpg';
import logo1 from './logo1.jpg';
class galerie extends Component{

render(){

return (
<div className="row">
        <div className="logo">
          <img src={logo} width="600" height="400" />
          <img src={logo1} width="600" height="400" />
        </div>
      </div>


);

}
}
export default galerie ;













import React,{Component} from "react";


class Contact extends Component{
        constructor(props) {
    super(props);
 
    this.state = {
      fullName: ""
    };
  }
 
  handleSubmitForm(event) {
    alert("Full Name: " + this.state.fullName);
    event.preventDefault();
  }
 
  handleChange(event) {
    var value = event.target.value;
 
    this.setState({
      fullName: value
    });
  }

render(){

return (
<div>


 <form onSubmit={event => this.handleSubmitForm(event)}>
        <label>
          Full Name:
          <input
            type="text"
            value={this.state.fullName}
            onChange={event => this.handleChange(event)}
          />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.fullName}</p>        
      </form>
    
  











<h2>GOT QUESTIONS?</h2>
<p>the easiest thing to do is post on our
     <a href="http://forum.kirupa.com"> forums</a>
</p>

</div>



);

}
}


export default Contact ;








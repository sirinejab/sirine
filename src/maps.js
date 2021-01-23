import React,{Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
class maps extends Component{

render(){

return (
<div>
 <Map google={this.props.google} zoom={14}>
   
   <Marker onClick={this.onMarkerClick}
           name={'Current location'} />
  
   <InfoWindow onClose={this.onInfoWindowClose}>
       
   </InfoWindow>
  </Map>
</div>



);

}
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCfJxM8QSv8YU9y23mV95ioZXgqrr0dXgw")
  })(maps)













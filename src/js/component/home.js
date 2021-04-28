import React from "react";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		
			 <div>
          <div id="barra"></div>
          <div id="semaforo">
            <div className= "luz roja" id= {this.state.estadoRoja} 
            onClick={()=>this.setState({estadoRoja: "encendida", estadoAmarilla: "apagada", estadoVerde: "apagada"})}>
            </div>
            <div className= "luz amarilla" id= {this.state.estadoAmarilla} 
            onClick={()=>this.setState({estadoRoja: "apagada", estadoAmarilla: "encendida", estadoVerde: "apagada"})}>
            </div>
            <div className= "luz verde" id= {this.state.estadoVerde} 
            onClick={()=>this.setState({estadoRoja: "apagada", estadoAmarilla: "apagada", estadoVerde: "encendida"})}>
            </div>
          </div>
        </div>);
		
	);
}

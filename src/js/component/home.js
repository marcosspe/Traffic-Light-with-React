import React, { useState } from "react";
import "./home.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("grey");

	return (
		<div id="cuerpo" className={"container bg-dark pt-3 pb-3 "}>
			<div>
				<button
					id="rojo"
					type="button"
					className="btn btn-danger rounded-circle"></button>
			</div>
			<div>
				<button
					id="amarillo"
					type="button"
					className="btn btn-warning"></button>
			</div>
			<div>
				<button
					id="verde"
					type="button"
					className="btn btn-success"></button>
			</div>
		</div>
	);
}

import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");

	return (
		<div>
			<div id="soporte" className={"container bg-dark pt-3 pb-3 "}></div>
			<div id="cuerpo" className={"container bg-dark pt-3 pb-3 "}>
				<button
					id="rojo"
					className={color == "red2" ? color : "red"}
					onClick={() => setColor("red2")}></button>

				<button
					id="amarillo"
					className={color == "yellow2" ? color : "yellow"}
					onClick={() => setColor("yellow2")}></button>

				<button
					id="verde"
					className={color == "green2" ? color : "green"}
					onClick={() => setColor("green2")}></button>
			</div>
		</div>
	);
}

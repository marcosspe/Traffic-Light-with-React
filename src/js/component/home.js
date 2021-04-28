import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<div>
				<button className="btn bg-danger"></button>
				<button className="btn bg-warning"></button>
				<button className="btn bg-success"></button>
			</div>
		</div>
	);
}

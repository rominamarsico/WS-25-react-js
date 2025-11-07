import { useState } from "react";
import "./Input.css"

export function InputWithState() {
	const [value, setValue] = useState(0);

	return (
		<div className="inputWithState">
			<h2>Input with useState</h2>
			<input onChange={(e) => setValue(e.target.value)} />
			<p>
				You entered {value}. Multiplied by 2, that equals {value * 2}
			</p>
		</div>
	);
}

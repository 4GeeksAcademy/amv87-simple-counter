import React from "react";
import Counter from "./counter";



const SimpleCounter = (props) => {
	return (
		<div className="container my-5">
			<div className="d-flex flex-row justify-content-evenly rounded align-items-center" style={{width: '80rem', height:'16rem', backgroundColor: 'rgb(9, 9, 9)'}}>
				<Counter number={<i className="far fa-clock"></i>} />
				<Counter number={props.secondHundredThousands} />
				<Counter number={props.secondTenThousands} />
				<Counter number={props.secondThousands} />
				<Counter number={props.secondHundreds} />
				<Counter number={props.secondTens} />
				<Counter number={props.secondUnits} />
			</div>
		</div>
	);
};

export default SimpleCounter;

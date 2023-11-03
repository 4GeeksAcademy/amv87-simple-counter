import React from "react";

const Counter = (props) => {
	return (
		<div className="d-flex align-items-center rounded justify-content-center border border-dark" style={{width: '8rem', height:'12rem', backgroundColor: 'rgb(22, 22, 22)'}}>
				<h1 className="text-white display-1 fw-bold">{props.number}</h1>
		</div>
	);
};

export default Counter;

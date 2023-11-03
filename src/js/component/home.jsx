import React from "react";
import ReactDOM from 'react-dom';
import Box from "./box";

const SimpleCounter = (props) => {
	return (
		<div className="container my-5">
			<div className="d-flex flex-row justify-content-evenly rounded align-items-center" style={{width: '80rem', height:'16rem', backgroundColor: 'rgb(9, 9, 9)'}}>
				<Box number={<i className="far fa-clock"></i>} />
				<Box number={props.secondHundredThousands} />
				<Box number={props.secondTenThousands} />
				<Box number={props.secondThousands} />
				<Box number={props.secondHundreds} />
				<Box number={props.secondTens} />
				<Box number={props.secondUnits} />
			</div>
		</div>
	);
};

export default SimpleCounter;

let counter = 0;
setInterval (function(){
  const first = Math.floor(counter/1) % 10;
  const second = Math.floor(counter/10) % 10;
  const third = Math.floor(counter/100) % 10;
  const fourth = Math.floor(counter/1000) % 10;
  const fifth = Math.floor(counter/10000) % 10;
  const sixth = Math.floor(counter/100000) % 10;
  counter++;
  ReactDOM.render(
    <SimpleCounter secondUnits={first} secondTens={second} secondHundreds={third} secondThousands={fourth} secondTenThousands={fifth} secondHundredThousands={sixth}/>,
    document.querySelector('#app')
  );
}, 1000);
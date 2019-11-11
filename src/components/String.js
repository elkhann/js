import React from 'react';

const Def = () => {
	var a = 5;
	var b = 10;
	return (
		<div className='App'>
			<p>console.log('string text line 1\n' + 'string text line 2');</p>
			<p>console.log(`string text line 1 string text line 2`);</p>
			<p>
				console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
			</p>
			<p>
				console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
			</p>
		</div>
	);
};

export default Def;

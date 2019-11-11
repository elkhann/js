import React from 'react';
import Bind from './components/Bind';
import NewFunc from './components/NewFunc';
import String from './components/String';
import Computed from './components/Computed';
import Map from './components/Map';
import Set from './components/Set';
import Object from './components/Object';
import Symbol from './components/Symbol';
import Rest from './components/Rest';
import Destructuring from './components/Destructuring';

function App() {
	return (
		<div className='App'>
			<h1>Bind, call, apply</h1>
			<Bind />
			<h1>new Function vs eval</h1>
			<NewFunc />
			<h1>String interpolation</h1>
			<String />
			<h1>Computed property names</h1>
			<Computed />
			<h1>Map</h1>
			<Map />
			<h1>Set</h1>
			<Set />
			<h1>WeakSet,WeakMap</h1>
			<p>
				WeakMap и WeakSet используются как вспомогательные структуры данных в
				дополнение к «основному» месту хранения объекта. Если объект удаляется
				из основного хранилища и нигде не используется, кроме как в качестве
				ключа в WeakMap или в WeakSet, то он будет удалён автоматически.
			</p>
			<h1>String, Array in ES6</h1>
			<h1>Object.assign Object.values</h1>
			<Object />
			<h1>Symbol</h1>
			<Symbol />
			<h1>for of vs for in</h1>
			<p>
				В отличие от for...of цикла, цикл for...in возвращает все перечисляемые
				свойства, включая имеющие нецелочисленные имена и наследуемые. Не
				использовать for in для итерации
			</p>
			<h1>Spread operator</h1>
			<p>myFunction(...iterableObj); let objClone = ...obj };</p>
			<h1>Rest parameter</h1>
			<Rest />
			<h1>Destructing assigment</h1>
			<Destructuring />
		</div>
	);
}

export default App;

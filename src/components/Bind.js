import React from 'react';

const Bind = () => {
	return (
		<div className='App'>
			<p>
				В основном, мы используем метод bind(), чтобы вызывать функцию с
				указанием значения this. А другими словами, bind() позволяет нам легко
				выставлять какой именно объект будет привязан к this в момент вызова
				функции или метода.
			</p>
			<p>("button").click (user.clickHandler.bind (user));</p>
			<p>С помощью bind() мы можем заимствовать методы</p>
			<p>cars.showData = user.showData.bind (cars)</p>
			<p>С помощью bind() мы можем каррировать функцию</p>
			<p>
				Каррирование функции, также известное, как частичное применение функции
				— это использование функции, которая возвращает новую функцию с уже
				частично выставленными аргументами. Эта функция имеет доступ к
				хранящимся аргументам и переменным внешней функции.
			</p>
			<p>
				В общем, мы передаем null, так как мы не используем this в функции var
				greetAnAdultMale = greet.bind (null, "male", 45); <br />greetAnAdultMale
				("John Hartlove"); <br />\// "Hello, Mr. John Hartlove." <br />var
				greetAYoungster = greet.bind (null, "", 16); <br />greetAYoungster
				("Alex"); <br />\// "Hey, Alex."
				<br />greetAYoungster ("Emma Waterloo"); <br />\// "Hey, Emma Waterloo."
			</p>
			<p>
				Методы apply() и call() практически идентичны при работе с выставлением
				значения this, за исключением того, что вы передаёте параметры функции в
				apply() как массив, в то время, как в call(), параметры передаются в
				индивидуальном порядке.
			</p>
			<p>var args = Array.prototype.slice.call (arguments);</p>
			<p>
				var allNumbers = [23, 11, 34, 56];<br />console.log (Math.max
				(allNumbers)); // NaN
			</p>
			<p>
				var allNumbers = [23, 11, 34, 56]; <br />
				console.log (Math.max.apply (null, allNumbers)); // 56
			</p>
			<p>
				https://medium.com/@stasonmars/подробно-о-методах-apply-call-и-bind-необходимых-каждому-javascript-разработчику-ddd5f9b06290
			</p>
		</div>
	);
};

export default Bind;

import React from 'react';

const Def = () => {
	return (
		<div className='App'>
			<p>
				Map – это коллекция ключ/значение, как и Object. Но основное отличие в
				том, что Map позволяет использовать ключи любого типа.
			</p>
			<p>
				Методы и свойства: new Map() – создаёт коллекцию. <br />
				map.set(key, value) – записывает по ключу key значение value.<br />
				map.get(key) – возвращает значение по ключу или undefined, если ключ key
				отсутствует.<br />
				map.has(key) – возвращает true, если ключ key присутствует в коллекции,
				иначе false.<br />
				map.delete(key) – удаляет элемент по ключу key.<br />
				map.clear() – очищает коллекцию от всех элементов.<br />
				map.size – возвращает текущее количество элементов.<br />
			</p>
			<p>
				let map = new Map(); <br />
				map.set("1", "str1"); // строка в качестве ключа<br />
				map.set(1, "num1"); // цифра как ключ<br />
				map.set(true, "bool1");
			</p>
			<p>
				alert(map.get(1)); // "num1"<br />
				alert(map.get("1")); // "str1"<br />
				alert(map.size); // 3
			</p>
			<p>
				Каждый вызов map.set возвращает объект map, так что мы можем объединить
				вызовы в цепочку: map.set("1", "str1") .set(1, "num1") .set(true,
				"bool1");
			</p>
			<p>
				map.keys() – возвращает итерируемый объект по ключам, map.values() –
				возвращает итерируемый объект по значениям, map.entries() – возвращает
				итерируемый объект по парам вида [ключ, значение], этот вариант
				используется по умолчанию в for..of.
			</p>
			<p>https://learn.javascript.ru/map-set</p>
			<p>
				let map = new Map(Object.entries(obj));<br />
				let obj = Object.fromEntries(map);
			</p>
		</div>
	);
};

export default Def;

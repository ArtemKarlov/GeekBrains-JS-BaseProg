// 1. Функции для работы с массивами

//a. Написать функцию, которая принимает в качестве параметра число n. Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.
//b. Написать функцию, которая принимает массив чисел. Результатом работы функции является сумма чисел этого массива.
//c. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает максимальное число.
//d. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает минимальное число.
//f. Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает только четные числа из этого массива. Чтобы определить четность числа, воспользуйтесь оператором для подсчета остатка от деления: x % 2. Если остаток от деления числа на 2 равен 0, число будет четное.
	
	function genIntArray(n) {
		let array = [];
		for (let i = 0; i < n; i++) {
			array[i] = i + 1;
		}
		return array;
	}

	function genSimpleArray(n) {
		let array = [];
		for (let i = 1; i <= n; i++) {
			array.push(i);
		}
		return array;
	}

	function sumOfArray(array) {
		let sum = 0;
		for (let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}

	function maxOfArray(array) {
		let max = array[0];
		for (let i = 0; i < array.length; i++) {
			if (array[i] > max) {
				max = array[i];
			}
		}
		return max;
	}

	function minOfArray(array) {
		let min = array[0];
		for (let i = 0; i < array.length; i++) {
			if (array[i] < min) {
				min = array[i];
			}
		}
		return min;
	}

	function evenOfArray(array) {
		let arrayOfEven = [];
		for (let i = 0; i < array.length; i++) {
			if ((array[i] % 2) == 0) {
				arrayOfEven.push(array[i]);
			}
		}
		return arrayOfEven;
	}
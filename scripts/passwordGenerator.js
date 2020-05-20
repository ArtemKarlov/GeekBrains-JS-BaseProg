function getRandomNumberMax(max){
	return Math.floor(Math.random() * max); //случайное целое число из диапазона [0,max)
}


function genPassword(length) {
	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	let symbols = arr_num.concat(arr_en);

	let password = '';

	for (let i = 0; i < length; i++) {
		let randomIndex = getRandomNumberMax(symbols.length);
		let randomTrigger = Math.round(Math.random()); //случайное число 0 или 1
		console.log(i + ':' + Number(symbols[randomIndex]) + ':' + randomTrigger); //вывод в консоль для отладки
		
		if ((randomTrigger == 1) && (isNaN(Number(symbols[randomIndex])))) {
			password += (symbols[randomIndex]).toUpperCase(); //если элемент массива не число, рандомно переводим его в верхний регистр
		} else {
			password += symbols[randomIndex];	
		}	
	}
	return password;
}

function getPassword() {
	let length = +document.getElementById("passLength").value;
	document.getElementById("password").innerHTML = genPassword(length);
}
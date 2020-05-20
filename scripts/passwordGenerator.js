function getRandomNumberMax(max){
	return Math.floor(Math.random() * max);
}

function genPassword(n) {
	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	let symbols = arr_num.concat(arr_en);

	let password = '';

	for (let i = 0; i < n; i++) {
		password += symbols[getRandomNumberMax(symbols.length)];
	}
	return password;
}

function getPassword() {
	let n = +document.getElementById("passLength").value;
	document.getElementById("password").innerHTML = genPassword(n);
}


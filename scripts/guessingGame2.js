	// let answer = parseInt(Math.random()*100);
	// console.log(answer);
	// let user1Answer = +prompt("Игрок 1, Угадайте число от 0 до 100");
	// let user2Answer = +prompt("Игрок 2, Угадайте число от 0 до 100");
	// let maxTryCount = 3;
	// for (let tryCount = 1; tryCount <= maxTryCount; tryCount++){
	// 	if ((user1Answer == answer) && (user2Answer != answer)) {
	// 		alert('Игрок 1, Вы победили');
	// 		break;
	// 	} else if ((user2Answer == answer) && (user1Answer != answer)) {
	// 		alert('Игрок 2, Вы победили');
	// 		break;
	// 	} else if ((user1Answer < answer) && (user2Answer < answer)){
	// 		alert('Игрок 1, Мало\nИгрок 2, Мало');
	// 	} else if ((user1Answer < answer) && (user2Answer > answer)){
	// 		alert('Игрок 1, Мало\nИгрок 2, Много');
	// 	} else if ((user1Answer > answer) && (user2Answer < answer)){
	// 		alert('Игрок 1, Много\nИгрок 2, Мало');
	// 	} else if ((user1Answer > answer) && (user2Answer > answer)){
	// 		alert('Игрок 1, Много\nИгрок 2, Много');
	// 	}

	// 	if (tryCount == maxTryCount){
	// 		alert('Вы проиграли');
	// 		break;
	// 	}

	// 	if (!(confirm('Игрок 1, Хотите пролоджить игру?'))){
	// 		alert('Игрок 1 прекратил игру');
	// 		break;
	// 	} else if (!(confirm('Игрок 2, Хотите пролоджить игру?'))){
	// 		alert('Игрок 2 прекратил игру');
	// 		break;
	// 	}

	// 	user1Answer = +prompt("Игрок 1, Угадайте число от 0 до 100 \n Осталось " + (maxTryCount - tryCount) + ' попыток');
	// 	user2Answer = +prompt("Игрок 2, Угадайте число от 0 до 100 \n Осталось " + (maxTryCount - tryCount) + ' попыток');
	// }

	// alert('Правильный ответ: ' + answer);


	let answer = parseInt(Math.random()*100);
	console.log(answer);
	let maxTryCount = 5;
	let tryCount = 1;
	document.getElementById("tryCount").innerHTML = maxTryCount;

	function checkAnsewr(n) {
		let answerId = 'user' + n + 'Answer';
		let compareId = 'user' + n + 'Compare';
		let userAnswer = +document.getElementById(answerId).value;

		if (userAnswer == answer) {
			document.getElementById(compareId).innerHTML = 'Вы выиграли';
			hide("checkButton");
			hide("user1Answer");
			hide("user2Answer");
		} else if (userAnswer > answer) {
			document.getElementById(compareId).innerHTML = 'Слишком много';
		} else if (userAnswer < answer) {
			document.getElementById(compareId).innerHTML = 'Слишком мало';
		}
	}

	function hide(id) {
		document.getElementById(id).style.display = "none";
	}

	function checkAnsewrs() {
		document.getElementById("tryCount").innerHTML = maxTryCount - tryCount;
		if (tryCount <= maxTryCount) {
			checkAnsewr(1);
			checkAnsewr(2);
		} 
		if (tryCount == maxTryCount) {
			hide("checkButton");
			hide("user1Answer");
			hide("user2Answer");
		}

		tryCount++;

		//затираем поля ввода
		let inputs = document.querySelectorAll('input[type=text]');
		for (let i = 0;  i < inputs.length; i++) {
			inputs[i].value = '';
		}
	}
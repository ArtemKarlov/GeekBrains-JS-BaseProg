	let answer = parseInt(Math.random()*100);
	console.log(answer);
	let user1Answer = +prompt("Игрок 1, Угадайте число от 0 до 100");
	let user2Answer = +prompt("Игрок 2, Угадайте число от 0 до 100");
	let maxTryCount = 3;
	for (let tryCount = 1; tryCount <= maxTryCount; tryCount++){
		if ((user1Answer == answer) && (user2Answer != answer)) {
			alert('Игрок 1, Вы победили');
			break;
		} else if ((user2Answer == answer) && (user1Answer != answer)) {
			alert('Игрок 2, Вы победили');
			break;
		} else if ((user1Answer < answer) && (user2Answer < answer)){
			alert('Игрок 1, Мало\nИгрок 2, Мало');
		} else if ((user1Answer < answer) && (user2Answer > answer)){
			alert('Игрок 1, Мало\nИгрок 2, Много');
		} else if ((user1Answer > answer) && (user2Answer < answer)){
			alert('Игрок 1, Много\nИгрок 2, Мало');
		} else if ((user1Answer > answer) && (user2Answer > answer)){
			alert('Игрок 1, Много\nИгрок 2, Много');
		}

		if (tryCount == maxTryCount){
			alert('Вы проиграли');
			break;
		}

		if (!(confirm('Игрок 1, Хотите пролоджить игру?'))){
			alert('Игрок 1 прекратил игру');
			break;
		} else if (!(confirm('Игрок 2, Хотите пролоджить игру?'))){
			alert('Игрок 2 прекратил игру');
			break;
		}

		user1Answer = +prompt("Игрок 1, Угадайте число от 0 до 100 \n Осталось " + (maxTryCount - tryCount) + ' попыток');
		user2Answer = +prompt("Игрок 2, Угадайте число от 0 до 100 \n Осталось " + (maxTryCount - tryCount) + ' попыток');
	}

	alert('Правильный ответ: ' + answer);
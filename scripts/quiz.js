// 3. Доработать игру в загадки:
//     a. Избавиться в игре в загадки от дублирования кода, используя массивы и функции.
//     b. Сделать так, чтобы программа поддерживала несколько правильных ответов на один и тот же вопрос. Все возможные варианты задаются программистом в коде программы.
	function askQuestion(questionArray) {
		let userAnswer = (prompt(questionArray[0] + '?')).toLowerCase();
		let isRight = false;
	
		for (let i = 1; i < questionArray.length; i++) {
			if (userAnswer == questionArray[i]) {
				isRight = true;
				break;
			}
		}
		if (isRight) {
			alert('Правильно');
			return 1;
		} else {
			alert('Неверно');
			return 0;
		}
	}


		function runQuiz(question, answersArray) {
		let userAnswer = (prompt(question + '?')).toLowerCase();
		let isRight = false;
	
		for (let i = 0; i < answersArray.length; i++) {
			if (userAnswer == answersArray[i]) {
				isRight = true;
				break;
			}
		}
		if (isRight) {
			alert('Правильно');
			return 1;
		} else {
			alert('Неверно');
			return 0;
		}
	}


	let rightAnswerCount = 0;
	//для функции askQuestion(questionArray)
	// let questions = [
	// 	['столица России', 'москва', 'moscow', 'vjcrdf', 'ьщысщц'],
	// 	['столица Германии', 'берлин', 'berlin', ',thkby', 'иукдшт'],
	// 	['столица США', 'вашингтон', 'washington', 'dfibyunjy', 'цфырштпещт'],
	// 	['столица Великобритании', 'лондон', 'london', 'kjyljy'],
	// ];

	// for (let i = 0; i < questions.length; i++){
	// 	rightAnswerCount = rightAnswerCount + askQuestion(questions[i]);
	// }
	
	let questions = [
		['столица России', ['москва', 'moscow', 'vjcrdf', 'ьщысщц']],
		['столица Германии', ['берлин', 'berlin', ',thkby', 'иукдшт']],
		['столица США', ['вашингтон', 'washington', 'dfibyunjy', 'цфырштпещт']],
		['столица Великобритании', ['лондон', 'london', 'kjyljy']],
	];

	for (let i = 0; i < questions.length; i++){
		rightAnswerCount = rightAnswerCount + runQuiz(questions[i][0], questions[i][1]);
	}

	alert('Игра окончена, правильных ответов: '+ rightAnswerCount);
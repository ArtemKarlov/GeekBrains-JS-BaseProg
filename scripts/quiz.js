// // 3. Доработать игру в загадки:
// //     a. Избавиться в игре в загадки от дублирования кода, используя массивы и функции.
// //     b. Сделать так, чтобы программа поддерживала несколько правильных ответов на один и тот же вопрос. Все возможные варианты задаются программистом в коде программы.
// 	function askQuestion(questionArray) {
// 		let userAnswer = (prompt(questionArray[0] + '?')).toLowerCase();
// 		let isRight = false;
	
// 		for (let i = 1; i < questionArray.length; i++) {
// 			if (userAnswer == questionArray[i]) {
// 				isRight = true;
// 				break;
// 			}
// 		}
// 		if (isRight) {
// 			alert('Правильно');
// 			return 1;
// 		} else {
// 			alert('Неверно');
// 			return 0;
// 		}
// 	}


// 		function runQuiz(question, answersArray) {
// 			let userAnswer = (prompt(question + '?')).toLowerCase();
// 			let isRight = false;
		
// 			for (let i = 0; i < answersArray.length; i++) {
// 				if (userAnswer == answersArray[i]) {
// 					isRight = true;
// 					break;
// 				}
// 			}
// 			if (isRight) {
// 				alert('Правильно');
// 				return 1;
// 			} else {
// 				alert('Неверно');
// 				return 0;
// 			}
// 		}


// 	let rightAnswerCount = 0;
// 	//для функции askQuestion(questionArray)
// 	// let questions = [
// 	// 	['столица России', 'москва', 'moscow', 'vjcrdf', 'ьщысщц'],
// 	// 	['столица Германии', 'берлин', 'berlin', ',thkby', 'иукдшт'],
// 	// 	['столица США', 'вашингтон', 'washington', 'dfibyunjy', 'цфырштпещт'],
// 	// 	['столица Великобритании', 'лондон', 'london', 'kjyljy'],
// 	// ];

// 	// for (let i = 0; i < questions.length; i++){
// 	// 	rightAnswerCount = rightAnswerCount + askQuestion(questions[i]);
// 	// }
	
// 	let questions = [
// 		['столица России', ['москва', 'moscow', 'vjcrdf', 'ьщысщц']],
// 		['столица Германии', ['берлин', 'berlin', ',thkby', 'иукдшт']],
// 		['столица США', ['вашингтон', 'washington', 'dfibyunjy', 'цфырштпещт']],
// 		['столица Великобритании', ['лондон', 'london', 'kjyljy']],
// 	];

// 	for (let i = 0; i < questions.length; i++){
// 		rightAnswerCount = rightAnswerCount + runQuiz(questions[i][0], questions[i][1]);
// 	}

// 	alert('Игра окончена, правильных ответов: '+ rightAnswerCount);

let questions = [
    ['столица России', ['москва', 'moscow', 'vjcrdf', 'ьщысщц']],
    ['столица Германии', ['берлин', 'berlin', ',thkby', 'иукдшт']],
    ['столица США', ['вашингтон', 'washington', 'dfibyunjy', 'цфырштпещт']],
    ['столица Великобритании', ['лондон', 'london', 'kjyljy']],
];
let score = 0;

function checkAnswer(inputId, answersArray) {
	let userAnswer = document.getElementById(inputId).value;
	userAnswer = userAnswer.toLowerCase();

	for (let i = 0; i < answersArray.length; i++) {
		if (userAnswer == answersArray[i]) {
			score++
			break;
		}
	}
}

function checkAnswers() {
   checkAnswer("userAnswer1", questions[0][1]);
   checkAnswer("userAnswer2", questions[1][1]);
   checkAnswer("userAnswer3", questions[2][1]);
   checkAnswer("userAnswer4", questions[3][1]);

   document.getElementById("score").innerHTML = score;

   var inputs = document.querySelectorAll('input[type=text]');
	for (var i = 0;  i < inputs.length; i++) {
		inputs[i].value = '';
	};

	score = 0;

}

document.getElementById("qustion1").innerHTML = questions[0][0];
document.getElementById("qustion2").innerHTML = questions[1][0];
document.getElementById("qustion3").innerHTML = questions[2][0];
document.getElementById("qustion4").innerHTML = questions[3][0];
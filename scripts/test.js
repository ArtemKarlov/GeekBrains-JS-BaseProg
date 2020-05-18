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
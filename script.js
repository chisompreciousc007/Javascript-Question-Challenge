( function() {
	var QuestObj = function (question, option, answer) {
	this.question = question;
	this.option = option;
	this.answer = answer;
	this.check = function(){
		if (input === this.answer){
			console.log('correct answer')
		}else {console.log('wrong answer')}
	};
	this.log = function(){
		console.log(this.question);
		for (var i=0; i<=this.option.length; i++){
			console.log(this.option[i])
		}
	}
}

var quest0 = new QuestObj('how many states are in Nigeria', ['0:20', '1:28', '2:36' ], '2');
var quest1 = new QuestObj('how many Planets are there', ['0:10', '1:7', '2:9' ], '2');
var quest2 = new QuestObj('what is the capital of imo State', ['0:uyo', '1:owerri', '2:Aba' ], '1');
var questionArray = [quest0, quest1, quest2];

var randomNumber = Math.floor(Math.random() * 3);
var currentquestion = questionArray[randomNumber];
currentquestion.log();
var input = window.prompt('input answer', '');
if (input === '0' || input === '1' || input === '2'){
	currentquestion.check()
	}
	else {alert('wrong Selection') }

})();
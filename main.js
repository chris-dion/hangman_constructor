var inquirer = require('inquirer');
var word = require("./word.js");
var letter = require('./letter.js');

var guesses = 7;
var cont_game = true;

//create new word and letter objects
var word_obj = new word;
var letter_obj = new letter(word_obj.char_array, guesses);

letter_obj.usr_display(word_obj.show_array);


//basic question for user input
var question = [
	{
		type: 'input',
		name: 'usr_input',
		message: 'What letter do you want to use this time?'
	}
]

//ask if the player wants to continue guessing
var game_over = [
	{
		type: 'confirm',
		name: 'cont',
		message: 'Do you want to continue?'
	}
]

//main game function
var game = function(){
	inquirer.prompt(question).then(function(responce) {


		//checks if the letter is apart of the word
		if(word_obj.part_of_word(responce.usr_input)){
			console.log("match found!");
			letter_obj.usr_display(word_obj.show_array);
			if(word_obj.check_win()){
				console.log("You Win!");

				//sets up so that the game will automatically quit out
				cont_game = false;
			}
		//if the letter is not apart of the letter
		}else{
			//tick off a guess
			letter_obj.guesses_left--;
			letter_obj.usr_display(word_obj.show_array);

			//checks if player loses
			if (letter_obj.guesses_left <= 0){
				console.log("You Lose.");
				//sets up so that the game will automatically quit out
				cont_game = false;
				inquirer.prompt(game_over).then(function(answer){

					//check if the player wants to contine the game regardless
					if(answer.cont == true){
						cont_game = true;
					}
				});
			}
		}

		//checks if the game has ended
		if (cont_game === true){
			console.log("next guess");
			game();
		}
	});
}

game();

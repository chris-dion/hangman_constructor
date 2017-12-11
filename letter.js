function letter(char_array, guesses){
	this.letter_array =  char_array;
	this.result_string= "";
	this.guesses_left = guesses;
	this.first_time = false;

	//creates the display for the player to use for next guess
	this.usr_display = function(visible_array){
		this.result_string = "";
		for (var i = 0; i < this.letter_array.length; i++){
			if (visible_array[i] === 0){
				this.result_string += " _";
			}else if (visible_array[i] === 1){
				this.result_string += " " + this.letter_array[i];
			}
		}
		console.log("You have " + this.guesses_left+" more guesses.")
		console.log(this.result_string);
	};
};

module.exports = letter;
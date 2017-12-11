function word (){
	this.chosen_word = pick_a_word();
	this.char_array = this.chosen_word.split("");

	//setups up array so we can distinguish on what to show what letters the user has guessed correctly. zero = no show; one = show
	this.show_array = [];
	for(var i = 0; i < this.char_array.length; i++){
		this.show_array.push(0);
	}

	//picks a word at random for the player to guess at
	function pick_a_word(){
		word_list = [
		"bebop", "destiny", "bastion", "hodor", "warhammer", "jedi"
		];

		index = Math.floor( ( (Math.random() * 10) + 1)/2);
		console.log("The word is: " + word_list[index]);
		return word_list[index];
	};

	//scanns the word and compare letters to the players choice letter
	this.part_of_word = function(letter){
		var match_bool = false;
	 for(var i = 0; i < this.char_array.length; i++){
	 	if (letter === this.char_array[i]){
	 		match_bool = true;
	 		this.show_array[i] = 1;
	 	}
	 }
	 console.log (this.show_array);
	 return match_bool;
	};

	//checks to see if the player wins
	this.check_win = function(){
		var count = 0;
		for (var i = 0; i < this.show_array.length; i++){
			if (this.show_array[i] === 1){
				count++;
			}
		}
		if (count >= this.show_array.length){
			return true;
		}else{
			return false;
		}
	};

}

module.exports = word;
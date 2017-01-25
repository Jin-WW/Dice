var memory = {};

function rollTo(n){
	if(n < 0) return 0;
	if(n == 0) return 1;
	if(memory[n]) return memory[n];
	var result = 0;
	for(var i = 1; i <= 6; i++){
		result += (1 / 6) * rollTo(n - i);
	}
	memory[n] = result;
	return result;
}

module.exports = rollTo;
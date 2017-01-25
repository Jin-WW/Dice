function roll(){
	var rand = Math.random();
	return Math.ceil(rand * 6);
}

function runOnce(n){
	while(n >= 0){
		if(n === 0){
			return true
		}
		n -= roll();
	}
	return false;
}

function runMultiple(times, n){
	var count = 0;
	for(var i = 0; i < times; i++){
		if(runOnce(n)) count++;
	}
	console.log('Experiment ' + times + ' times: the probability of winning is ' + (count / times));
}

var target = 100;
runMultiple(100, target)
runMultiple(1000, target)
runMultiple(10000, target)
runMultiple(100000, target)
runMultiple(1000000, target)


console.log('#################################')
console.log('the predicted answer is ' + require('./index.js')(target));





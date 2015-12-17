var nums = process.argv.slice(2);
var sum = 0;

nums.forEach(function(num) {
	sum += +num;
});

console.log(sum);
var count = document.querySelector(".count-input");
//console.log(count.value);
var reduce = document.querySelector(".reduce");
var add = document.querySelector(".add");
reduce.onclick = function() {
	if(count.value > 0) {
		count.value--;
	}
}
add.onclick = function() {
	count.value++;
}
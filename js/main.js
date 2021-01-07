$(document).ready(function(){
$("a[href*=#]").on("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 777);
e.preventDefault();
return false;
});
});

let button = document.querySelector('button');

button.onclick = () =>{
	let input1 = document.querySelector('.name');
	let input2 = document.querySelector('.E-mail');
	let input3 = document.querySelector('.phone');
	let input4 = document.querySelector('.text');
	console.log(document.querySelector('.name').value);
	console.log(document.querySelector('.E-mail').value);
	console.log(document.querySelector('.phone').value);
	console.log(document.querySelector('.text').value);
	input1.value = '';
	input2.value = '';
	input3.value = '';
	input4.value = '';
}
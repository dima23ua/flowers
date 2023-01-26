let radio = document.getElementsByName('height');
let valueData = document.getElementById('#height');


for (let i = 0; i < radio.length; i++) {
	radio[i].onchange = testRadio;
}

function testRadio() {
	console.log(this.value);
}
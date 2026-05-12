const btn = document.getElementByTd('magicButton');
const title = document.getElementById('mainTitle');

btn.addEventListener('click', () => {

	title.innerText = "Ура! Ты запустил ядерку!";
	title.style.color = "#39ff14";

	alert("Поздравляю! Ты уничтожил всю планету! У тебя есть 5 минут для того чтобы спрятаться в бункер :)");

	document.body.style.backgroundColor = "#57606f";
});

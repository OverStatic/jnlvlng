var i=0;
var txt = "Oi meu bem, queria demonstrar meu carinho um pouco diferente, queria primeiramente te pedir perdão por tudo que causei a você nunca quis magoar você, segunda coisa é falar a qual você uma pessoa incrível, eu nao vou me cansar em dizer isso. Você é a melhor coisa que me aconteceu, você um poço de intensidade de caos e calmaria, você é companhia que preciso. E quero deixar claro que essa frase vai fica eternizada em mim: 'eu vi no seu olho um universo de coisas que desconheço'. E tudo isso me lembra você, sinto você mover em mim!  Eu sou uma bagunça mas o que eu sinto é real."; 
/* var txt="Teste hsaushuahsuashua";*/
var vel=1;

function digitacao(){
	if(i<txt.length){
		document.getElementById("texto").innerHTML += txt.charAt(i);
		i++;
		vel=Math.floor(Math.random()*50);
		setTimeout(digitacao,vel);
	}
}
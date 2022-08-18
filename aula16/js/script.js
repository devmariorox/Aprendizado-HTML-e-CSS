let atribuicao = "atribuição";
console.log(atribuicao);

let x = 30;
let y = 2;
console.log("O operador de adição retorna" , x+y);
console.log("O operador de subtração retorna" , x-y);
console.log("O operador de multiplicação retorna" , x*y);
console.log("O operador de divisão retorna" , x/y);

let numero1 = 10;
let numero2 = 3;
console.log("O operador de exponenciação retorna", numero1**numero2);
console.log("O operador de modulo(resto de divisao retorna", numero1%numero2);
console.log("numero1 valia", numero1);
numero1++;
console.log("agora vale", numero1);
console.log("numero2 valia", numero2);
numero2--;
console.log("agora vale", numero2);

console.log("--- Operadores de compração ---");
let primeirovalor = 100;
let segundovalor = "100";

if(primeirovalor == segundovalor){
	console.log("os valores são iguais");
	
}else{
	("sao valores diferentes");
}

let v1 = 10;
let v2 = 20;
let v3 = 30;
let v4 = 40;

if(v1 > v2){
console.log(v1,"é maior que",v2);

}else if(v1<v2){
	console.log(v1,"é maior que",v2);
}else{
	console.log("os numeros são iguais");
};


if(v4 > v3 && v2 > v1){
	console.log(v4,"é maior quer", v3, "e" ,v2, "é maior que" , v1);
}else{
	console.log("A condição não é verdadeira");
		
	
}

if(v4 < v3 || v2 > v1){
	console.log(v4,"é maior quer", v3, "e" ,v2, "é maior que" , v1);
}else{
	console.log("A condição não é verdadeira");
		
	
}

	
let titulo = document.getElementById("titulo");
let botao = document.getElementById("botao");

botao.addEventListener('click', function (){
	(document.body.style.backgroundColor = "black");
	(titulo.innerHTML = "MODO NOTURNO");
	(titulo.style.color = "white");
	
});

	



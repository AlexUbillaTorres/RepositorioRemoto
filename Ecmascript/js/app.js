/*
	Mi EcmaScript

	consola web
	2+2
	'hola'
	console.log('hola')
	alert('Pop Up!')
*/

/*
* Conversión de tipos
*/

/*console.log('Comentario '+100)
console.log(52+ ' Comentario ')
console.log("37" + 7)
console.log("37" - 7)

console.log(parseInt("37") + 7)
console.log(parseInt("37") - 7)
*/

function saludar(nombre) {
  return "Intro a " + nombre; //Cuando se llama, esta funcion devuelve "Hola " y el nombre que se le ha pasado como argumento.
}

/*Llamar a la función e imprimir por pantalla / mensaje de alerta*/

/*
* Funciones
* var, let y const
* BOM y DOM
* Eventos
*/

(function() {

	/*Mostrar un mensaje de alerta al cargar*/
    alert("Area Restringida")
	/* Obtener el elemento con el id quote1 */
    var elemento=document.getElementById('quote1')
    console.log(elemento)
	/* Obtener el elemento con el id quotes */
    var elemento=document.getElementById('quotes')
    console.log(elemento)
	/* Obtener los elementos con la etiqueta div y mostrar el contenido*/
    var elementos=document.getElementsByTagName('div')
    for (var i = elementos.length - 1; i >= 0; i--) {
    	console.log(elementos[i])
    }
	/* Obtener los elementos con la clase well */
    var elementos=document.querySelectorAll('div[class="well"]')
    for (var i = elementos.length - 1; i >= 0; i--) {
    	console.log(elementos[i])
    }
	/* Query Selector para los div's con clase well dentro del div con id quotes */
    var elementos=document.querySelectorAll('div#quotes > div[class="well"]')
    for (var i = elementos.length - 1; i >= 0; i--) {
    	console.log(elementos[i])
    }
	/* Mostrar los autores de las frases */
	var elementos=document.querySelectorAll('div#quotes > div[class="well"]')
    for (ele of elementos) {
    	var autores=ele.getAttribute('author')
    	console.log(autores)
    }
    
	/* Mostrar el texto de los div's cuyo autor termine en ous */
    var elementos2=document.querySelectorAll('div#quotes > div[author$="ous"]')
    for (ele of elementos2) {
    	console.log(ele.textContent)
    }
	/* Crear un h3 con el autor de cada div con clase well */
    var elementos3=document.querySelectorAll('div#quotes > div[class="well"]')
    for(ele of elementos3){
    	 var h3=document.createElement('h3')
    	 h3.textContent=ele.getAttribute('author')
    }
	/* Insertar el h3 antes del p dentro de la cita */
    var elementos3=document.querySelectorAll('div#quotes > div[class="well"]')
    for(ele of elementos3){
    	 var h3 =document.createElement('h3')
    	 h3.textContent=ele.getAttribute('author')
    }
	/* Obtener el texto del input con id texto */

	/* Al dar clic en el botón buscar debe ocultar las citas que no contengan el texto ingresado en input (id='texto')*/

})();


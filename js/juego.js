//Funciones a ejecutar al cargar el sitio
var idioma = "ES",
	escena = 0; //definimos la escena inicial como 0

$(document).on('ready', function(){ //ejecutamos el siguiente código inmediatamente que carga el sitio
	$('#mensaje').hide(); //ocultamos el div #mensaje
	$('#menu').hide(); //ocultamos el div #menu
	cambiarEscena(); //cargamos la escena actual
});

//Abrir menú
function abrirMenu() {
	$('#menu').fadeIn(); //mostramos el menú
};

//Volver a anterior escena
function anteriorEscena() {
	if (escena==0) { //comprobamos que escena sea igual 0
		mostrarMensaje('No se puede ir más atras'); //si se cumple la condición mostramos un mensaje
	}
	else {
		--escena; //si no se cumplió la condición a escena le restamos 1
		cambiarEscena(); //llamamos a la función cambiar de escena
	}
};

//Cambiar escena
function cambiarEscena() {
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")'); //cambiamos el fondo por el de la escena actual
	$('#dialogo').html(escenas[escena][idioma]); //cambiamos el diálogo por el de la escena actual
	if (escenas[escena].char3 != '') {
		$('#personajes').html('<img src="img/char/'+escenas[escena].char1+'" /><img src="img/char/'+escenas[escena].char2+'" /><img src="img/char/'+escenas[escena].char3+'" />'); //mostramos a los tres personajes
	}
	else if (escenas[escena].char2 != '') {
		$('#personajes').html('<img src="img/char/'+escenas[escena].char1+'" /><img src="img/char/'+escenas[escena].char2+'" />'); //mostramos a los dos personajes
	}
	else if (escenas[escena].char1 != '') {
		$('#personajes').html('<img src="img/char/'+escenas[escena].char1+'" />'); //mostramos al único personaje
	}
	else {
		$('#personajes').html(''); //quitamos a todos los personajes
	}
};

//Cargar partida
function cargarPartida() {
	escena = parseInt(localStorage.escena); //cargamos a la variable escena el valor almacenado en localStorage
	cambiarEscena(); //llamamos a la función cambiar de escena
	mostrarMensaje('Partida cargada con éxito'); //llamamos a la función para mostrar el mensaje de que se cargó con éxito
	cerrarMenu(); //cerramos el menú
};

//Cerrar menú
function cerrarMenu() {
	$('#menu').fadeOut(); //ocultamos el menú
};

//Guardar partida
function guardarPartida() {
	localStorage.escena = escena; //almacenamos en localStorage el número de escena actual
	mostrarMensaje('Partida guardada con éxito'); //llamamos a la función para mostrar el mensaje de que se guardó con éxito
	cerrarMenu(); //llamamos a la función cerrar el menú
};

//Mostrar mensaje
function mostrarMensaje(mensaje) {
	$('#mensaje').html(mensaje).fadeIn(); //mostramos el div #mensaje con el texto recibido
	setTimeout(function(){$('#mensaje').fadeOut();},1000); //esperamos 1s y lo ocultamos
};

//Pasar a siguiente escena
function siguienteEscena() {
	if (escena==escenas.length-1) { //comprobamos que escena sea igual al valor más alto de escenas
		mostrarMensaje('No hay más escenas'); //si se cumple la condición mostramos un mensaje
	}
	else {
		++escena; //si no se cumplió la condición a escena le sumamos 1
		cambiarEscena(); //llamamos a la función cambiar de escena
	}
};

//Funciones ejecutadas al oprimir teclas
$(document).on('keyup', function(evt) {
	if (evt.keyCode=='13') { //tecla enter
		siguienteEscena();
	}
	else if (evt.keyCode=='39') { //flecha a la derecha
		siguienteEscena();
	}
	else if (evt.keyCode=='37') { //flecha a la izquierda
		anteriorEscena();
	}
	else if (evt.keyCode=='27') { //tecla escape
		abrirMenu();
	}
	else if (evt.keyCode=='83') { //tecla S
		guardarPartida();
	}
	else if (evt.keyCode=='76') { //tecla L
		cargarPartida();
	}
});
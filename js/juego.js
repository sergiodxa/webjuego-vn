var idioma = localStorage.idioma; //obtenemos el idioma de localStorage

$(document).on('ready', function(){ //ejecutamos el siguiente código inmediatamente que carga el sitio
	$('#mensaje').hide(); //ocultamos el div #mensaje
	$('#menu').hide(); //ocultamos el div #menu
	$('#opciones').hide(); //ocultamos el div #menu
	if (idioma != undefined) {
		$('#idioma').hide();
	};
});

function abrirMenu() {
	$('#menu').fadeIn(); //mostramos el menú
};

function abrirOpciones() {
	$('#opciones').fadeIn(); //mostramos las opciones del juego
};

function abrirPrincipal() {
	$('#menu').fadeOut(); //ocultamos el menú
	$('#inicio').fadeIn(); //mostramos el menú principal
};

function anteriorEscena() {
	if (escena==0) { //comprobamos que escena sea igual 0
		mostrarMensaje('No se puede ir más atras',"No one can go back"); //si se cumple la condición mostramos un mensaje
	}
	else {
		--escena; //si no se cumplió la condición a escena le restamos 1
		cambiarEscena(); //llamamos a la función cambiar de escena
	}
};

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

function cambiarIdioma(valor) {
	localStorage.idioma = valor; //al valor del idioma en localStorage le damos el valor elegido
	idioma = valor; //cambiamos la variable idioma por el nombre del idioma
	$('#idioma').hide(); //ocultamos las banderas
};

function cargarPartida() {
	if (localStorage.escena >= 0) { //comprobamos que haya una partida guardada
		escena = parseInt(localStorage.escena); //cargamos a la variable escena el valor almacenado en localStorage
		cambiarEscena(); //llamamos a la función cambiar de escena
		mostrarMensaje('Partida cargada con éxito','Game successfully loaded'); //llamamos a la función para mostrar el mensaje de que se cargó con éxito
		cerrarMenu(); //cerramos el menú
		$('#inicio').fadeOut(); //ocultamos el menú principal
	}
	else {
		mostrarMensaje('No hay partidas guardadas','You do not have save games'); //mostramos un mensajes avisando que no hay partidas guardadas
		cerrarMenu(); //cerramos el ḿenú de estas abierto
	}
};

function cerrarMenu() {
	$('#menu').fadeOut(); //ocultamos el menú
};

function cerrarOpciones() {
	$('#opciones').fadeOut(); //ocultamos las opciones del juego
};

function guardarOpciones() {
	idiomaOpciones = $('#idioma_opciones option:selected').val(); //obtenemos el idioma seleccionado
	cambiarIdioma(idiomaOpciones); //ejecutamos el cambio de idioma
	mostrarMensaje('Cambios guardados','Changes saved'); //mostramos un mensaje de que los cambios se guardaron
	cambiarEscena(); //ejecutamos un cambio de escena por si cambio el idioma
	cerrarOpciones(); //llamamos a la función para cerrar la ventana de opciones
};

function guardarPartida() {
	localStorage.escena = escena; //almacenamos en localStorage el número de escena actual
	mostrarMensaje('Partida guardada con éxito','Game successfully saved'); //llamamos a la función para mostrar el mensaje de que se guardó con éxito
	cerrarMenu(); //llamamos a la función cerrar el menú
};

function empezarJuego() {
	$('#inicio').fadeOut(); //ocultamos el menú principal
	escena = 0; //definimos la variable escena como 0
	cambiarEscena(); //cargamos la escena
}

function mostrarMensaje(ES, EN, BR, FR, DE, JP, CH, KR, RU) {
	if (idioma=='ES') {
		$('#mensaje').html(ES).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='EN') {
		$('#mensaje').html(EN).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='BR') {
		$('#mensaje').html(BR).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='FR') {
		$('#mensaje').html(FR).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='DE') {
		$('#mensaje').html(DE).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='JP') {
		$('#mensaje').html(JP).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='CH') {
		$('#mensaje').html(CH).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='KR') {
		$('#mensaje').html(KR).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	else if (idioma=='RU') {
		$('#mensaje').html(RU).fadeIn(); //mostramos el div #mensaje con el texto recibido
	}
	setTimeout(function(){$('#mensaje').fadeOut();},1000); //esperamos 1s y lo ocultamos
};

function siguienteEscena() {
	if (escena==escenas.length-1) { //comprobamos que escena sea igual al valor más alto de escenas
		mostrarMensaje('No hay más escenas','No more scenes'); //si se cumple la condición mostramos un mensaje
	}
	else {
		++escena; //si no se cumplió la condición a escena le sumamos 1
		cambiarEscena(); //llamamos a la función cambiar de escena
	}
};

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
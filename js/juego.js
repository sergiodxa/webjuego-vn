//Funciones a ejecutar al cargar el sitio
var escena = 0;
$(document).on('ready', function(){
	$('#mensaje').hide();
	$('#menu').hide();
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")');
	$('#dialogo').html(escenas[escena].dialogo);
});

/************************/
/*	Funciones del menú	*/
/************************/
//Abrir menú
function abrirMenu() {
	$('#menu').fadeIn();
};
//Cerrar menú
function cerrarMenu() {
	$('#menu').fadeOut();
};
//Guardar partida
function guardarPartida() {
	localStorage.escena = escena;
	$('#mensaje').html('Partida guardada con éxito').fadeIn();
	setTimeout(function(){$('#mensaje').fadeOut();},1000);
	cerrarMenu();
}
//Cargar partida
function cargarPartida() {
	escena = parseInt(localStorage.escena);
	cambiarEscena();
	$('#mensaje').html('Partida cargada con éxito').fadeIn();
	setTimeout(function(){$('#mensaje').fadeOut();},1000);
	cerrarMenu();
}
/************************/
/*	Funciones del juego	*/
/************************/
//Pasar a siguiente escena
function siguienteEscena() {
	if (escena==escenas.length-1) {
		$('#mensaje').html('No hay más escenas').fadeIn();
		setTimeout(function(){$('#mensaje').fadeOut();},1000);
	}
	else {
		++escena;
		cambiarEscena();
	}
};
//Volver a anterior escena
function anteriorEscena() {
	if (escena==0) {
		$('#mensaje').html('No se puede ir más atras').fadeIn();
		setTimeout(function(){$('#mensaje').fadeOut();},1000);
	}
	else {
		--escena;
		cambiarEscena();
	}
};
//Cambiar escena
function cambiarEscena() {
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")');
	$('#dialogo').html(escenas[escena].dialogo);
}
/************/
/*	Teclas	*/
/************/
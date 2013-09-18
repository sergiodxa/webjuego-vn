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
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")');
	$('#dialogo').html(escenas[escena].dialogo);
	$('#mensaje').html('Partida cargada con éxito').fadeIn();
	setTimeout(function(){$('#mensaje').fadeOut();},1000);
	cerrarMenu();
}
/************************/
/*	Funciones del juego	*/
/************************/
//Pasar a siguiente escena
function siguiente() {
	escena = escena+1;
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")');
	$('#dialogo').html(escenas[escena].dialogo);
};

//Volver a anterior escena
function anterior() {
	escena = escena-1;
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")');
	$('#dialogo').html(escenas[escena].dialogo);
};
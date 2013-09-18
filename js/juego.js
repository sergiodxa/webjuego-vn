//Funciones a ejecutar al cargar el sitio
var escena = 0;
$(document).on('ready', function(){
	//$('#menu').hide();
	$('#juego').css('background-image','url("img/bg/'+escenas[escena].bg+'")');
	$('#dialogo').html(escenas[escena].dialogo);
});

//Abrir menú
function abrirMenu() {
	$('#menu').fadeIn();
};

//Cerrar menú
function cerrarMenu() {
	$('#menu').fadeOut();
};

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
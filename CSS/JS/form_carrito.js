function datos_formulario() {
	var nombre_carrito=document.getElementById('nombre_carrito').value;
	var correo_carrito=document.getElementById('correo_carrito').value;
	var total_carrito=document.getElementById('total_carrito').value;

	alert('Nombre '+nombre_carrito+"\n"+'Correo '+correo_carrito+"\n"+total_carrito);
}
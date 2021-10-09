let boton_reservas = document.getElementById("submit-reservas");
let form = document.getElementById("reservas");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const params = {
        nombre: document.getElementById("1Nombre").value,
        Apellido: document.getElementById("1Apellido").value,
        cc: document.getElementById("Email").value,
        servicios: document.getElementById("Servicio").value,
        fecha: document.getElementById("fechaHora").value,
        n_personas: document.getElementById("n_personas").value,
        message: "su reserva a sido realizada con exito",
    }
    console.log(params);
    sendMail(params);
    Swal.fire('Reserva exitosa').then((result)=>{
        console.log(result);
        if(result.isConfirmed || result.isDismissed){
            form.reset();
        }
    });
});
/*boton_reservas.addEventListener("click", () => {
    
    const params = {
        nombre: document.getElementById("1Nombre").value,
        Apellido: document.getElementById("1Apellido").value,
        cc: document.getElementById("Email").value,
        servicios: document.getElementById("Servicio").value,
        fecha: document.getElementById("fechaHora").value,
        n_personas: document.getElementById("n_personas").value,
        message: "su reserva a sido realizada con exito",
    }
    console.log(params);
    sendMail(params);
    Swal.fire('Reserva exitosa');
    event.preventDefault();
})*/

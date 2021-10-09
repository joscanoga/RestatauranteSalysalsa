function sendMail(params) {
    var tempParams = {
        to_name: document.getElementById("1Nombre").value,
        nombre: document.getElementById("1Nombre").value,
        Apellido: document.getElementById("1Apellido").value,
        servicios: document.getElementById("Servicio").value,
        fecha: document.getElementById("fechaHora").value,
        n_personas: document.getElementById("n_personas").value,
    };

    emailjs.send('gmail','template_qa96fda',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}
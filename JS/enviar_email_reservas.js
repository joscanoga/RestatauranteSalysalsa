(() => {
    emailjs.init("user_WuQPc5Oqw7VC55jrpk8Wq");
    })();
function sendMail(params) {
    var tempParams = {
        nombre: params.nombre,
        Apellido: params.Apellido,
        cc: params.cc,
        servicios: params.servicios,
        fecha: params.fecha,
        n_personas: params.n_personas,
        message: params.message,
    };
    
    emailjs.send('gmail','template_qa96fda',tempParams)
    .then((res) => {
        console.log("success", res.status);
    })
}


(() => {
    emailjs.init("user_WuQPc5Oqw7VC55jrpk8Wq");
    })();
function sendMail(campos) {
    var tempCampos = {
        nombre: campos.nombre,
        cc: campos.cc,
        total_carrito: campos.total_carrito,
        message1: campos.message1,
    };
    
    emailjs.send('gmail','template_dck15r2',tempCampos)
    .then((res) => {
        console.log("success", res.status);
    })
}
function obtenerCarito(){
    carito=JSON.parse(localStorage.getItem('carito'));
    return(carito)
}
carito=[]
carito=obtenerCarito()
console.log(carito)

tbody=document.querySelector(".tbody")
renderCarrito(carito)
function renderCarrito(carito){
    
    tbody.innerHtml=""
    carito.map(item=>{
        const tr=document.createElement("tr")
        tr.classList.add("itemCarrito");
        const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.price}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
            `
        tr.innerHTML=Content 
        tbody.append(tr)
    
        
        
        
    })
}
function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemcartTotal')
    carito.forEach((item) => {
      const precio = Number(item.price.replace("$", ''))
      Total = Total + precio*item.cantidad
    })
  
    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
  }
  CarritoTotal()
  
  let compraDatos = document.getElementById("compraDatos"); 
  compraDatos.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("entre");
    Swal.fire({
      title: 'Desea finalizar el pedido?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let nombres_items=[];
        let cantidad_items=[];
        let precio_items = []; 
        carito.forEach((item) => {
          nombres_items.push(item.title);
          cantidad_items.push(item.cantidad);
          precio_items.push(item.price);
        })
        let texto_productos;
        for(let i=0; i<nombres_items.length; i++)
        {
          texto_productos +="\n\nNombre del producto: "+nombres_items[i]+", Cantidad: "+cantidad_items[i]+", Precio: "+precio_items[i]+"\n\n";
        }
        console.log(texto_productos);
        const campos = {
          nombre: document.getElementById("nombre_carrito").value,
          cc: document.getElementById("correo_carrito").value,
          total_carrito: document.getElementById("total").textContent,
          message1: texto_productos,
        }
        sendMail(campos);
        Swal.fire('Saved!', '', 'success')
        //localStorage.removeItem("carito");
        //location.reload();
      }
    })
});
const Clickbutton = document.querySelectorAll('.button')
let carito=[]
//si hay carrito en localstage lo carga
carito2=JSON.parse(localStorage.getItem('carito'));
if(carito2 !== null){
    carito=carito2
}

Clickbutton.forEach(btn => {
    btn.addEventListener("click",addToCarritoItem)
})
function addToCarritoItem(e){
    
    const button=e.target
    const item = button.closest(".row-cols-sm-1")
    const  itemTitle =item.querySelector("h1").textContent;
    const itemPrice=item.querySelector("h2").textContent;
    const itemImg=item.querySelector(".img-fluid").src
    const itemcant=item.querySelector(".cantidad").value
    let confirmacion = window.confirm(`Desea agragar ${itemcant} unidades de ${itemTitle} al carrito?`);

    if(itemcant>0&&confirmacion){
        const newItem={
            title:itemTitle,
            price:itemPrice,
            img:itemImg,
            cantidad:itemcant
            }
            additemCarrito(newItem)

    }
    

}
function additemCarrito(newItem){
    for(let i =0; i < carito.length ; i++){
        if(carito[i].title.trim() === newItem.title.trim()){
            carito[i].cantidad =parseInt(carito[i].cantidad)+parseInt(newItem.cantidad)
            console.log("hola")
            addLocalStorage(carito)
        
          return null;
        }
      }

    carito.push(newItem);
    console.log(carito)
    addLocalStorage(carito)
    rendercarrito(carito)
    

}
function rendercarrito(carito){
    console.log(carito)
}




function addLocalStorage(){
    localStorage.setItem('carito', JSON.stringify(carito))
  }
  

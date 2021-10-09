const Clickbutton = document.querySelectorAll('.button')
let carito=[]
carito=JSON.parse(localStorage.getItem('carito'));

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
    
    if(itemcant>0){
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

    carito.push(newItem);
    addLocalStorage(carito)
    rendercarrito(carito)
    

}
function rendercarrito(carito){
    console.log(carito)
}




function addLocalStorage(){
    localStorage.setItem('carito', JSON.stringify(carito))
  }
  
window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carito'));
    if(storage){
      carrito = storage;
      rendercarrito(carito)
    }
  }
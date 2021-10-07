const Clickbutton = document.querySelectorAll('.button')

Clickbutton.forEach(btn => {
    btn.addEventListener("click",addToCarritoItem)
})
function addToCarritoItem(e){
    const button=e.target
    const item = button.closest(".row-cols-sm-1")
    const  itemTittle =item.querySelector("h1").textContent;
    console.log(itemTittle)
}
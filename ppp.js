const parent =document.getElementById("parent");
for (let i=0;i < 16*16; i++){
    const ggg =document.createElement("div")
    ggg.classList.add("draw")
    parent.appendChild(ggg);
}
parent.addEventListener("mouseover", (e) => {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    if(e.target.classList.contains("draw")){
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
})


    
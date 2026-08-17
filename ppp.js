const parent =document.getElementById("parent");
for (let i=1;i <= 16*16; i++){
    const ggg =document.createElement("div")
    ggg.classList.add("draw")
    parent.appendChild(ggg);
    
}
   
parent.addEventListener("mouseover", (e) => {
    
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    if (e.target.classList.contains("draw")){
        let alpha = Number(e.target.dataset.color) || 0;
        if (alpha < 1){
            alpha += 0.1;
            alpha = alpha.toFixed(1);
            e.target.dataset.color = alpha
        }
        e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
    }
})

const button = document.getElementById("click")
button.addEventListener("click", () => {
    let choice = prompt("Enter grid size")
    let size = Number(choice)
    parent.innerHTML = "";
    if(size > 0 && size <= 100){
        
        let newGrid = size * size
        let percentSize = 100 / size

        for(let i=1;i <= newGrid;i++){
            const ppp = document.createElement("div")
            ppp.classList.add("draw")
            ppp.style.width = `${percentSize}%`
            ppp.style.height = `${percentSize}%`
            parent.appendChild(ppp);
        }
    }else{
        alert("enter the number between 1 and 100!")
    }

});


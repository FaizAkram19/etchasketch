const container=document.querySelector(".container");
const reset=document.querySelector(".reset");
function generateGrid(boxes)
{
    for(let i=0;i<boxes*boxes;i++)
    {
        const square=document.createElement("div");
        square.classList.add("squarebox");
        square.style.backgroundColor="white";
        //letting flexbox handle the scaling,where 100% means the ful width i.e.,960px
        square.style.width=100/boxes+"%";
        container.appendChild(square);
        square.addEventListener("mouseenter",()=>{
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            square.style.backgroundColor= color;
        });
    }

}
reset.addEventListener("click",()=> {
    let choice=prompt("Enter the no. between 0 and 100");
    while(choice>=100 || choice<=0 && !(0<choice<100))
    {
        choice=prompt("Invalid Choice. Enter again");
    }
    container.innerHTML="";
    //to clear the pervious made grid
    generateGrid(choice);
})
generateGrid(16);
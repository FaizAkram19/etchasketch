const container=document.querySelector(".container");
const reset=document.querySelector(".reset");
const rainbow=document.querySelector(".rainbow");
const darken=document.querySelector(".darken");
const blacky=document.querySelector(".black");
let currentmode="rainbow";
blacky.addEventListener("click",()=>{
    currentmode="blacky";
});
darken.addEventListener("click", ()=>{
    currentmode="darken";
})
rainbow.addEventListener("click",()=> {
    currentmode="rainbow";
});
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
        square.dataset.darkness=0; //initialize darkness when creating each square
        square.addEventListener("mouseenter",()=>{
            if(currentmode==="rainbow")
          {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            square.style.backgroundColor= color;
          }
          else if(currentmode==="blacky")
          {
            square.style.backgroundColor='black';
          }
          /*
          How it works
square.dataset.darkness = 0;

When we first create each square, we store a custom attribute (data-darkness) with a starting value of 0 (fully white).

Reading & updating darkness

On mouseenter, we grab square.dataset.darkness, convert it to a number, and increase it by 1 until it reaches 10 (fully black).

Shading calculation

The shade is calculated by:
shade = 255 - (darkLevel * 25.5)
darkLevel * 25.5 is the darkness amount (since 255 / 10 ≈ 25.5 per step).

At darkLevel = 0 → shade = 255 (white)
At darkLevel = 10 → shade = 0 (black).

Why dataset instead of reading backgroundColor

Reading style.backgroundColor returns a string like "rgb(128, 128, 128)", which is messy to parse.

dataset lets you store numeric values directly, so you can easily update and read them without parsing colors.
*/
          else if(currentmode==="darken")
          {
            let darkLevel = parseInt(square.dataset.darkness, 10);
        if (darkLevel < 10) {
            darkLevel++;
            square.dataset.darkness = darkLevel;
        }
        let shade = 255 - (darkLevel * 25.5);
        square.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
          }
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
    //to clear the previous made grid
    generateGrid(choice);
})
generateGrid(16);
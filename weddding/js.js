document.addEventListener("DOMContentLoaded",()=>{

    const area = document.getElementById("slidearea")
    const main = document.querySelectorAll("header ul li>a")



    main.forEach(i =>{
        i.addEventListener("mouseenter",()=>{
            i.nextElementSibling.style.height = "100%"

        })

        i.parentElement.addEventListener("mouseleave",()=>{
            i.nextElementSibling.style.height = 0

        })
    })


    

    const move = () =>{
        area.style.left  = "-100%";
        area.style.transition = "left 1s"
        
        
        const append = () =>{
            area.appendChild(area.children[0]);
            area.style.left = "0%";
            area.style.transition = "none";
    
    
        }

        setTimeout(append, 1100)



    }
    

    
    


    setInterval(move, 2700);

    const li = document.querySelectorAll("#notice li a")
    const btn = document.querySelector("#popup>div>button")
    const pop = document.getElementById("popup")


    li.forEach(i =>{
        i.addEventListener("click",()=>{
            pop.style.display = "initial"

        })


    })

    btn.addEventListener("click",()=>{
        pop.style.display = "none"

    })

})
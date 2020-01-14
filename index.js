let stagesCard=document.querySelectorAll(".stages .card")
console.log(stagesCard)
stagesCard.forEach((card)=>{
    card.addEventListener('mouseenter',()=>{
        card.style.backgroundColor="rgb(216, 241, 216)"
        
    })
})

stagesCard.forEach((card)=>{
    card.addEventListener('mouseleave',(e)=>{
       card.style.backgroundColor="white";
    })
})

stagesCard.forEach((card)=>{
    card.addEventListener('click',(e)=>{ 
        if(!card.classList.contains("cardSelected"))
        {removeOtherSelectedCard(stagesCard)
        card.classList.add("cardSelected")
        card.querySelector("i").classList.remove("text-info")
    card.querySelector("i").classList.add("text-success")
    if(card.querySelector("p").innerHTML.includes("Let's"))
    {console.log("object-s")
        document.querySelector(".attachment").classList.remove("d-none")
   
    }

    else{
        console.log('kkk')
       if(!document.querySelector(".attachment").classList.contains("d-none"))
        document.querySelector(".attachment").classList.add("d-none")
    }
    }
       

        
           
      })})
            
            


    

const removeOtherSelectedCard=(cards)=>{
    cards.forEach((card)=>{
        if(card.classList.contains("cardSelected"))
        {
            card.classList.remove("cardSelected")
            card.querySelector("i").classList.remove("text-success")
             card.querySelector("i").classList.add("text-info")
        }
    })
}
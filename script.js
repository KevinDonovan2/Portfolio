window.addEventListener("DOMContentLoaded",()=>{

    const btn = document.querySelector("#basic-addon1") 
    
    const snt = document.getElementById("sent");
    
    btn.addEventListener("click",()=>{
        setTimeout(()=>{
            snt.classList.remove("tapenana")
        },100);    
        setTimeout(()=>{
            snt.classList.add("tapenana")
        },2000);
        
    });
});
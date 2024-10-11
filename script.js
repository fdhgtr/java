let prvni = document.getElementById('prvni')

prvni.addEventListener('click', function(){
    alert("Vyskočil Alert!")

})

const druhy = document.getElementById('druhy')

druhy.addEventListener('click', function(){
    druhy.textContent = "Změnil se text";
    

})

function zmenText() {
    document.getElementById("text").innerText = "Text byl změněn!";
}



function zapisText() {
    document.getElementById("novyText").innerText = "Toto je nový text!";
}
    
        
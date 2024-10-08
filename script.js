let prvni = document.getElementById('prvni')

prvni.addEventListener('click', function(){
    alert("Vyskočil Alert!")

})

const druhy = document.getElementById('druhy')

druhy.addEventListener('click', function(){
    druhy.textContent = "Změnil se text";
    

})


document.getElementById("button").addEventListener("click", function() {
    document.getElementById("text").innerText = "Text byl změněn!";
});
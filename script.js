let prvni = document.getElementById('prvni')

prvni.addEventListener('click', function(){
    alert("Vyskočil Alert!")

})

const druhy = document.getElementById('druhy')

druhy.addEventListener('click', function(){
    druhy.textContent = "Změnil se text";
    

})

document.getElementById("button").onclick = function() {
    document.getElementById("text").innerText = "Text byl změněn!";
};

function hellouser(){
        let user = document.getElementById('user').value; 
        alert('Vítam ' + user);
    }
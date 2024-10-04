let prvni = document.getElementById('prvni')

prvni.addEventListener('click', function(){
    alert("Vyskočil Alert!")

})

const druhy = document.getElementById('druhy')

druhy.addEventListener('click', function(){
    druhy.textContent = "Změnil se text";
    

})
    
function hellouser(){
        let user = document.getElementById('user').value; 
        alert('Vítam ' + user);
    }
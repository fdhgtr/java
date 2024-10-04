let prvni = document.getElementById('prvni')

prvni.addEventListener('click', function(){
    alert("Vyskočil Alert!")

})

const druhy = document.getElementById('druhy')

druhy.addEventListener('click', function(){
    druhy.textContent = "Změnil se text";
    

})

document.getElementById('changeTextButton').addEventListener('click', function() {
    const newText = prompt('Zadejte nový text pro H1:');
    if (newText) {
        document.getElementById('headerText').textContent = newText;
    }
});

function hellouser(){
        let user = document.getElementById('user').value; 
        alert('Vítam ' + user);
    }
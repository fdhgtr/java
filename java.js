let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("Alert.")

})

const second_button = document.getElementById('second')

second_button.addEventListener('click', function(){
    second_button.textContent = "Změnila se barvicka";
    

})
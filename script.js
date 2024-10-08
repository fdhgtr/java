let prvni = document.getElementById('prvni')

prvni.addEventListener('click', function(){
    alert("Vyskočil Alert!")

})

const druhy = document.getElementById('druhy')

druhy.addEventListener('click', function(){
    druhy.textContent = "Změnil se text";
    

})


<script>
        document.getElementById("timeButton").addEventListener("click", function() {
            const currentTime = new Date().toLocaleTimeString();
            document.getElementById("output").innerText = "Aktuální čas: " + currentTime;
        });

        document.getElementById("dateButton").addEventListener("click", function() {
            const currentDate = new Date().toLocaleDateString();
            document.getElementById("output").innerText = "Aktuální datum: " + currentDate;
        });
    
        
 // Get the language-modal
 var modal = document.getElementById("myModal");

 function changeLanguages() {
     modal.style.display = "block";
 }
 // When the user clicks anywhere outside of the language-modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
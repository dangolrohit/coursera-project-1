let box = document.getElementById("check").addEventListener("click", function(){
        let checkbox = document.getElementById('check');
        let navLinks = document.getElementById('nav-links');
        if (checkbox.checked) {
           navLinks.style.right = "20px";
        } else {
           navLinks.style.right = "-100%"
        }
        
});

function msgDisplay() {
   let fullName = document.getElementById("name").value;
   document.getElementById("msg").innerHTML = "Thank you for visiting " + fullName + "!";
} 
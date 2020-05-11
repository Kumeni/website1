let toggle=0;

function handleNavClick(){
    if(toggle == 0){
        console.log("toggleOff");
        document.getElementById("toggle").innerHTML = "&times";
        document.getElementById("toggle").style.color = "white";
        document.getElementById("target").style.opacity = "1";
        toggle=1;
    } else if ( toggle == 1) {
        console.log("toggleOn");
        document.getElementById("toggle").innerHTML = "<i class='fas fa-bars'></i>";
        document.getElementById("toggle").style.color = "white";
        document.getElementById("target").style.opacity = "0";
        toggle=0;
    }
}
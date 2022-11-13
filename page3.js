var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "Permanence"){
        reponse.value="https://evossss.github.io/6/"; 
    }
    else{reponse.value="Falsche Antwort";
}
    }




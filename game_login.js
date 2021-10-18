function Submit(){
    var Player1Username = document.getElementById("Player1Username").value;
    var Player2Username = document.getElementById("Player2Username").value;
    localStorage.setItem("Player1Username",Player1Username);
    localStorage.setItem("Player2Username",Player2Username);
    window.location = "game_page.html";
}


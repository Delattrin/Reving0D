function abreLink(){
    var entrada = document.getElementById('entrada');
    var senha = document.getElementById('senha');

    if ((entrada.value == 'Nath' || entrada.value == "Nath") && senha.value == '03122023') {
        localStorage.setItem("acesso", true);
        window.location.href = "..pag2.html"
    }else {
        alert("Usuário ou senha não aceitas bb")
    }
}

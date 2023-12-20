function sorteio(){
    let listaNomeFilme = [ "VER VELOZES E FURIOSOS", "PODE TIRAR UM SEGUIDOR DO IG", , "VALE CHAMADA DE VIDEO", "ORAR JUNTOS", "VALE CHOCOLATE QUANDO TIVER NA TPM", "VALE BEIJO", "BUQUE", "VALE AÇAI", 
     "ANDAR DE MÃO DADA", , "FICAR OLHANDO O CÉU JUNTOS", , "IR PRA PRAIA JUNTOS", "VER POR DO SOL JUNTOS", "CONGREGAR JUNTOS", "TOCAR JUNTOS",
    "fazer presentes a mão juntos", "COZINHAR JUNTOS", "PEQUINIQUE JUNTOS", "SHOPPING/CINEMA JUNTOS", "FAZER COMPRAS JUNTOS", "TREINAR JUNTOS", "IR NO PARQUINHO", "RODA GIGANTE/PASSEIO ROMANTICO",
    "ver alguma exposiçao juntos"]

    let randonIndex = Math.floor(Math.random() * listaNomeFilme.length);

    let element = document.getElementById('mostrar')
    element.innerHTML = listaNomeFilme[randonIndex]
}

function texto(){
    window.location.href = "../Pasta2/pag2.html"
}
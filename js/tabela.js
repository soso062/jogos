function creatGame(player1, hour, player2){
    return `
    <li>
    <img src="times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="times/icon-${player2}.png" alt="Bandeira do ${player2}"/>
    `
}
let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="aniation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
createCard("05/07", "Quarta-Feira", creatGame("corinthians", 
"21:00", "palmeiras"))+createCard("10/07", "Segunda-Feira",
 creatGame("atletico", "20:00", "bahia"))+createCard("12/07", 
 "Quarta-Feira", creatGame("sp", "19:00", "vasco"))+createCard
 ("14/07", "Sexra-Feira", creatGame("inter", "18:00", "santos"))
+createCard("16/07", "Domingo", creatGame("bota", "16:00",
 "flamengo"))+createCard("20/07", "Quinta-Feira", creatGame
("cruzeiro", "21:00", "gremio"))
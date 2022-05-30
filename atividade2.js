var dataEvento = Nova Data('Novembro 4, 2077 9:00:00')
var diaAtual = Nova Data()
const idadepermitida = 18

let nomeParticipante = "Carla pereira"
let idade = 20
let participantes = ["Paulo jose","Jesse pinheiro","João","Dalton pereira","Vanderson souza","Vicente joao"]



console.log("Insira a data do evento:", dataEvento.toString())

if (dataEvento.getTime() < diaAtual.getTime()) {
    console.log("Data indisponivel")
} else if (idade < idadepermitida) {
    console.log("Evento proibido para menores de 15 anos")
} else if (participantes.length < 100) {
    participantes.push(nomeParticipante)
    console.log("Cadastro concluido com sucesso!")
}  else {
    console.log("Capacidade de participantes no limite")
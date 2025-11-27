//### CONFIGUARANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";
//Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-ricardo';

//### Criando o cliente MQTT do navegador, Podem ainda não estamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, {
//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// });

//##### Variaveis dos dispositivos
const lampSalaInput = document.getElementById("lamp-sala");
const lampVarandaInput = document.getElementById("lamp-varanda");
const varVarandaInput = document.getElementById("var-varanda")

const lampSalaTexto = document.getElementById("lamp-sala-texto");
const cortSalaTexto = document.getElementById("cort-sala-texto")
const portSalaTexto = document.getElementById("port-sala-texto");

const lampCozinhaTexto = document.getElementById("lamp-cozinha-texto");
const exausCozinhaTexto = document.getElementById("exaustor-cozinha-texto")

//#### Alterando estado dos dispositivos

//### Pegando o evento de mudança do botão (ligado/desligado)
lampSalaInput.addEventListener("change", () => {
    //Verifica se o botão estácomo ligado
    const ligado = lampSalaInput.checked === true;

    if (ligado === true){
        // console.log("Lâmpada ligada");
        lampSalaTexto.innerHTML = "Ligado";
    }else{
        // console.log("Lâmpada desligada");
        lampSalaTexto.innerHTML = "Deligado";
    }
});
cortSalaTexto.addEventListener("change", () => {
    const aberto = cortSalaTexto.checked === true;
    if(aberto === true){
        cortSalaTexto.innerHTML = "Aberto";
    }else{
        cortSalaTexto.innerHTML = "Fechado";
    }
});

portSalaTexto.addEventListener("change", () => { 
    const aberta = portSalaTexto.checked === true;
    if(aberta === true){
        portSalaTexto.innerHTML = "Aberta";
    }else{
        portSalaTexto.innerHTML = "Fechado";
    }
});

lampCozinhaTexto.addEventListener("change", () => {
    const ligado = lampCozinhaTexto.checked === true;
    if(ligado === true){
        lampCozinhaTexto.innerHTML = "Ligado";
    }else{
        lampCozinhaTexto.innerHTML = "Desligado";
    }
});

exausCozinhaTexto.addEventListener("change", () => {
    const ligado = exausCozinhaTexto.checked === true;
    if(ligado === true){
        exausCozinhaTexto.innerHTML = "Ligado";
    }else{
        exausCozinhaTexto.innerHTML = "Desligado";
    }
});

lampVarandaInput.addEventListener("change", () => {
    const ligado = lampVarandaInput.checked === true;
    if(ligado === true){
        lampVarandaTexto.innerHTML = "Ligado";
    }else{
        lampCozinhaTexto.innerHTML = "Desligado"
    }
});

varVarandaInput.addEventListener("change", () => {
    
});



//### Chamando um evento JS do tipo "DOMContentLoard", que é o evento que acontece
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso! ✅...Conectado ao Mosquitto!");

//     //## Estabelecendo a conexão com o broker mqtt
//     cliente.on("connect", () => {
//     console.log("Conexão estabelecida com sucesso ✅!");
//     console.log("Cliente conectado: ", clienteId);

//     //### Criando um topico para acessar mensagens do MQTT
//     const topicoTeste = 'teste/ricardo';
    
//     //### Recebendo mensagens do topico criado
//     cliente.subscribe(topicoTeste);

//     });

//     //#### Preparando mensagem de erro caso algo aconteça
//     cliente.on("error", (erro) => {
//         console.error("Erro ao se conectar ao Broker MQTT 🚫!");
//         console.error(erro);
//     });
    
//     //### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
//     cliente.on("message", (topico, mensagem) => {
//         console.log("Topico recebido: ", topico);
//         console.log("Mensagem recebida ", mensagem);
//     });
// });

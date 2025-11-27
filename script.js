//### CONFIGUARANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";
//Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-ricardo';

//### Criando o cliente MQTT do navegador, Podem ainda não estamos conectados ao BROKER
const cliente = mqtt.connect(MQTT_URL, {
    clienteId,
    clean: true,
    connectTimeout: 4000,
});

//##### Variaveis dos dispositivos
const lampSalaInput = document.getElementById("lamp-sala");
const lampVarandaInput = document.getElementById("lamp-varanda");
const varVarandaInput = document.getElementById("var-varanda");
const portVarandaInput = document.getElementById("port-varanda");
const irVarandaInput = document.getElementById("ir-varanda");
const cortSalaInput = document.getElementById("cort-sala");

const exausCozinhaInput = document.getElementById("exaustor-cozinha");
const lampCozinhaInput = document.getElementById("lamp-cozinha")
const portSalaInput = document.getElementById("porta-sala")

const lampSalaTexto = document.getElementById("lamp-sala-texto");
const cortSalaTexto = document.getElementById("cort-sala-texto")
const portSalaTexto = document.getElementById("port-sala-texto");

const portVarandTexto = document.getElementById("port-varanda-texto");
const lampCozinhaTexto = document.getElementById("lamp-cozinha-texto");
const exausCozinhaTexto = document.getElementById("exaustor-cozinha-texto")
const lampIluminacaoTexto = document.getElementById("lamp-iluminacao-texto")

const irVarandaTexto = document.getElementById("ir-varanda-texto")
const lampVarandaTexto = document.getElementById("")
const varVarandaTexto = document.getElementById("var-varanda-texto")

//### Chamando um evento JS do tipo "DOMContentLoard", que é o evento que acontece
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso! ✅...Conectado ao Mosquitto!");

    //## Estabelecendo a conexão com o broker mqtt
    cliente.on("connect", () => {
        console.log("Conexão estabelecida com sucesso ✅!");
        console.log("Cliente conectado: ", clienteId);

        //### Criando um topico para acessar mensagens do MQTT
        const topicoTeste = 'teste/ricardo';

        //### Recebendo mensagens do topico criado
        cliente.subscribe(topicoTeste);

    });

    //#### Preparando mensagem de erro caso algo aconteça
    cliente.on("error", (erro) => {
        console.error("Erro ao se conectar ao Broker MQTT 🚫!");
        console.error(erro);
    });

    //### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
    cliente.on("message", (topico, mensagem) => {
        console.log("Topico recebido: ", topico);
        console.log("Mensagem recebida ", mensagem.toString());
    });

    //### Pegando o evento de mudança do botão (ligado/desligado)
    lampSalaInput.addEventListener("change", () => {
        const TOPICO_LAMP_SALA = 'casa-ricardo/sala/lamp';

        //Verifica se o botão estácomo ligado
        const ligado = lampSalaInput.checked === true;

        if (ligado === true) {
            // console.log("Lâmpada ligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Ligado');
            lampSalaTexto.innerHTML = "Ligado";
        } else {
            // console.log("Lâmpada desligada");
            lampSalaTexto.innerHTML = "Deligado";
        }
    });

    //#### Alterando estado dos dispositivos

    cortSalaInput.addEventListener("change", () => {
        const TOPICO_CORT_SALA = 'casa-ricardo/sala/cort';

        const aberta = cortSalaInput.checked === true;
        if (aberta === true) {
            //console.log("cortina aberta");
            cliente.publish(TOPICO_CORT_SALA, 'Ligado')
            cortSalaTexto.innerHTML = "Aberta"
        } else {
            console.log("Cortina fechada")
            cortSalaTexto.innerHTML = "fechada"
        }
    });

    portSalaInput.addEventListener("change", () => {
        const TOPICO_PORT_SALA = 'casa-ricardo/sala/port';

        const aberto = portSalaInput.checked === true;
        if (aberto === true) {
            //console.log("porta aberta");
            cliente.publish(TOPICO_PORT_SALA, 'Aberta')
            portSalaTexto.innerHTML = "aberta";
        } else {
            portSalaTexto.innerHTML = "fechada";
        }
    });

    exausCozinhaInput.addEventListener("change", () => {
        const TOPICO_EXAUS_COZINHA = 'casa-ricardo/cozinha/exaus';

        const ligado = exausCozinhaInput.checked === true;
        if (ligado === true) {
            cliente.publish = (TOPICO_EXAUS_COZINHA, 'Ligado')
            //console.log("Exaustor ligado");
            exausCozinhaTexto.innerHTML = "Ligado"
        } else {
            exausCozinhaTexto.innerHTML = "Desligado"
        }
    })

    lampCozinhaInput.addEventListener("change", () => {
        const TOPICO_LAMP_COZINHA = 'casa-ricardo/cozinha/lamp';

        const ligado = lampCozinhaInput.checked === true;
        if (ligado === true) {
            cliente.publish = (TOPICO_LAMP_COZINHA, 'Ligado')
            //console.log("Lampada ligado");
            lampCozinhaTexto.innerHTML = "Ligado"
        } else {
            lampCozinhaTexto.innerHTML = "Desligado"
        }
    });

    lampVarandaInput.addEventListener("change", () => {
        const TOPICO_LAMP_VARANDA = 'casa-ricardo/varanda/lamp';

        const ligado = lampVarandaInput.checked === true;
        if (ligado === true) {
            cliente.publish = (TOPICO_LAMP_VARANDA, 'Ligado')
            lampIluminacaoTexto.innerHTML = "Ligado";
        } else {
            lampIluminacaoTexto.innerHTML = "Desligado"
        }
    });

    varVarandaInput.addEventListener("change", () => {
        const TOPICO_VAR_VARANDA = 'casa-ricardo/varanda/var';

        const aberto = varVarandaInput.checked === true;
        if (aberto === true) {
            cliente.publish(TOPICO_VAR_VARANDA, 'Aberto');
            // console.log("Varal aberto");
            varVarandaTexto.innerHTML = "aberto";
        } else {
            // console.log("varal fechado");
            varVarandaTexto.innerHTML = "Fechado";
        }
    });

    portVarandaInput.addEventListener("change", () => {
        const TOPICO_PORT_VARANDA = 'casa-ricardo/varanda/port';

        const aberto = portVarandaInput.checked === true;
        if (aberto === true) {
            cliente.publish(TOPICO_PORT_VARANDA, 'Aberto')
            //console.log("porta aberta");
            portVarandTexto.innerHTML = "Aberto"
        } else {
            console.log("porta fechada");
            portVarandTexto.innerHTML = "Fechado"
        }
    });

    irVarandaInput.addEventListener("change", () => {
        const TOPICO_IR_VARANDA = 'casa-ricardo/varanda/ir';

        const aberto = irVarandaInput.checked === true;
        if (aberto === true) {
            cliente.publish(TOPICO_IR_VARANDA, 'Aberto');
            //console.log("porta aberta");
            irVarandaTexto.innerHTML = "Aberto"
        } else {
            console.log("porta fechada");
            irVarandaTexto.innerHTML = "Fechado"
        }
    });

});

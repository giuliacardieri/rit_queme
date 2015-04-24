var resposta = null;
var regra = 'R1';
var nome_json;
var final = false;

// pré carregando imagens
var Nicole = new Image();
Nicole.src = "images/nicole.png";
var Raquel = new Image();
Raquel.src = "images/raquel.png";
var Caio = new Image();
Caio.src = "images/caio.png";
var Duda = new Image();
Duda.src = "images/duda.png";
var Jéssica = new Image();
Jéssica.src = "images/jessica.png";
var Marina = new Image();
Marina.src = "images/marina.png";
var Erro = new Image();
Erro.src = "images/erro.png";
var Raianne = new Image();
Raianne.src = "images/raianne.png";
var Felipe = new Image();
Felipe.src = "images/felipe.png";
var Giulia = new Image();
Giulia.src = "images/giulia.png";
var Matheus = new Image();
Matheus.src = "images/matheus.png";
var Eduardo = new Image();
Eduardo.src = "images/eduardo.png";
var Guilherme = new Image();
Guilherme.src = "images/guilherme.png";
var Michelangelo = new Image();
Michelangelo.src = "images/michelangelo.png";
var Bruno = new Image();
Bruno.src = "images/bruno.png";

function clicouBotao(resposta) {
    setRegra(resposta);
    if (regra.length > 3)
        final = true;
    else
        setPergunta();
    if (final)
        setFinal(resposta);
}

function setRegra(resposta) {
    if (resposta == "sim")
        regra = eval("sistemaEspecialista." + regra + "[0].sim");
    else
        regra = eval("sistemaEspecialista." + regra + "[0].nao");
}

function setPergunta() {
    nome_json = "sistemaEspecialista." + regra + "[0].pergunta";
    $("#pergunta").html(eval(nome_json));
}

function setFoto(resposta) {
    $("#foto").attr("src", eval(regra).src);
}

function setFinal(resposta) {
    setFoto(resposta);
    $("#pergunta").html("Você pensou em " + regra);
}

function acerto() {
    $("#acerto, #acerto-container").css("display", "block");
}

function erro() {
    $("#foto").attr("src", Erro.src);
    $("#pergunta").html("Que pena! Nossas linhas telepáticas foram mal-alinhadas assim como as vending machines do RIT.").addClass("big");
    $(".sim, .nao").css("display", "none");
    $(".tentar").css("display", "block");
}

$(function() {
    $(".sim").click(function() {
        if (!final)
            clicouBotao('sim');
        else
            acerto();
    });

    $(".nao").click(function() {
        if (!final)
            clicouBotao('nao');
        else
            erro();
    });

    $(".again, .tentar").click(function() {
        window.location.reload();
    });

});
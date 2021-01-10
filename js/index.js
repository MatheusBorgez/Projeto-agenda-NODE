//função para confirmação de agendamento.
function action_confirm() {
    let msg;
    let msg_tela = confirm("Deseja confirmar a seleção?");
    if (msg_tela == true) {
        msg = "Obrigado por selecionar os horários na sala de musculação!"
        alert(msg);
        window.location.replace("file:///D:/Biblioteca/Documentos/GitHub/Projeto-agenda-NODE/menu.html");
    } else {
        window.location.reload();
    }

}
// função para cancelamento
function action_cancel() {

    let msg_tela = confirm("Deseja voltar a tela de seleção de salas?");
    if (msg_tela == true) {
        window.location.replace("file:///D:/Biblioteca/Documentos/GitHub/Projeto-agenda-NODE/menu.html");
    } else {
        window.location.reload();
    }

}

//função para chamar tela sala de musculação

function tela_musc() {
    window.location.href = "file:///D:/Biblioteca/Documentos/GitHub/Projeto-agenda-NODE/agenda_musc.html";

}

//função para chamar tela sala de multifuncional
function tela_mult() {
    return window.location.href = "file:///D:/Biblioteca/Documentos/GitHub/Projeto-agenda-NODE/agenda_mult.html";
}

// Preenchimento automatico endereço pelo cep

$("#cep").focusout(function() {
    //Aqui vai o código	
    $.ajax({
        //O campo URL diz o caminho de onde virá os dados
        //É importante concatenar o valor digitado no CEP
        url: 'https://viacep.com.br/ws/' + $(this).val() + '/json/unicode/',
        //Aqui você deve preencher o tipo de dados que será lido,
        //no caso, estamos lendo JSON.
        dataType: 'json',
        //SUCESS é referente a função que será executada caso
        //ele consiga ler a fonte de dados com sucesso.
        //O parâmetro dentro da função se refere ao nome da variável
        //que você vai dar para ler esse objeto.
        success: function(resposta) {
            //Agora basta definir os valores que você deseja preencher
            //automaticamente nos campos acima.
            $("#logradouro").val(resposta.logradouro);
            $("#complemento").val(resposta.complemento);
            $("#bairro").val(resposta.bairro);
            $("#cidade").val(resposta.localidade);
            $("#uf").val(resposta.uf);
            //Vamos incluir para que o Número seja focado automaticamente
            //melhorando a experiência do usuário
            $("#numero").focus();
        }
    });
});

// Validação CPF

function TestaCPF(strCPF) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
let strCPF = "12345678909";
// alert(TestaCPF(strCPF));

function MaskCpf() {
    let cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}
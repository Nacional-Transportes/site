function validarNome() {
    MsgErro = MsgErro + "Digite o nome completo";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="nomecompleto";
    //alert(foco);
}
function validacaoEmail(id) {
    usuario = document.getElementById(id).value.substring(0, document.getElementById(id).value.indexOf("@"));
    dominio = document.getElementById(id).value.substring(document.getElementById(id).value.indexOf("@") + 1, document.getElementById(id).value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true;
    } else {
        return false;
    }
}

function validarEmail() {
    MsgErro = MsgErro + "Digite o email corretamente";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="email";
}
function validarTelefone() {
    MsgErro = MsgErro + "Digite o telefone corretamente";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="telefone";
}

function validarTipoVeiculo() {
    MsgErro = MsgErro + "Selecione o tipo de veículo";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="tipoveiculo";
}

function validarMarcaVeiculo() {        
    MsgErro = MsgErro + 'Selecione a marca do veículo';
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="marcaveiculo";
}

function validarModeloVeiculo() {        
    MsgErro = MsgErro + 'Selecione o modelo do veículo';
    document.getElementById("mensagemError").innerHTML = MsgErro;        
    foco="modeloveiculo";
}

function validarValorVeiculo() {        
    MsgErro = MsgErro + 'Digite o valor de veículo';
    document.getElementById("mensagemError").innerHTML = MsgErro;        
    foco="valorveiculo";
}

function validarEstadoOrigem() {
    MsgErro = MsgErro + "Selecione o estado de origem";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="estadoorigem";
}
function validarCidadeOrigem() {
    MsgErro = MsgErro + "Selecione a cidade de origem";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="cidadeorigem";
}
function validarColeta() {
    MsgErro = MsgErro + "Selecione o modo de coleta";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="coleta";
}
function validarEstadoEntrega() {
    MsgErro = MsgErro + "Selecione o estado de entrega";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="estadoentrega";
}
function validarCidadeEntrega() {
    MsgErro = MsgErro + "Selecione a cidade de entrega";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="cidadeentrega";
}
function validarRetirada() {
    MsgErro = MsgErro + "Selecione o modo de retirada";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="retirada";
}
function validarMotivo() {
    MsgErro = MsgErro + "Selecione o motivo";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="motivo";
}

function validarDataTransporte() {
    MsgErro = MsgErro + "Selecione a data aproximada do transporte";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="datatransporte";
}

function validarObservacao() {
    MsgErro = MsgErro + "Digite as observações";
    document.getElementById("mensagemError").innerHTML = MsgErro;
    foco="observacao";
}

function validarTermo() {
    MsgErro = MsgErro + "Você tem que ler e aceitar os termos de uso";
    document.getElementById("mensagemError").innerHTML = MsgErro;
}

function validarWhatsapp() {
    MsgErro = MsgErro + "Você tem aceitar o modo de envio de orçamentos";
    document.getElementById("mensagemError").innerHTML = MsgErro;
}

function validacaoCaptcha() {

/*alert('Captcha');
var $captcha = $('#recaptcha'),
response = grecaptcha.getResponse();

if (response.length === 0) {
    $( '.msg-error').text( "reCAPTCHA is mandatory" );
    alert( 'reCAPTCHA falta marcar' );
    if( !$captcha.hasClass( "error" ) ){
    $captcha.addClass( "error" );
    }
} else {
    $( '.msg-error' ).text('');
    $captcha.removeClass( "error" );
    alert( 'reCAPTCHA marked' );
}*/

var v = grecaptcha.getResponse();
if (v.length == 0) {
    //document.getElementById('recaptcha').innerHTML="You can't leave Captcha Code empty";
    //alert('Selecione o Captcha');
    return false;
}
else {
    //document.getElementById('recaptcha').innerHTML="Captcha completed";
    //alert('Captcha Selecionado');
    return true;
}

}

function validarCaptcha() {
    MsgErro = MsgErro + "Selecione o captcha";
    document.getElementById("mensagemError").innerHTML = MsgErro;        
}      


function validarSucesso() {        
    document.getElementById("box-form-cotacao").submit();
    MsgErro = MsgErro + "Mensagem Enviada com Sucesso!";
    document.getElementById("mensagemError").innerHTML = MsgErro;
}
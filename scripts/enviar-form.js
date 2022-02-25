function enviarForm() {
    MsgErro = "";
    //alert(MsgErro);

    NomeCompleto = document.getElementById("nomecompleto").value;
    if (NomeCompleto.length < 5) {
        validarNome();
        return false;
    }

    if (!validacaoEmail('email')) {
        validarEmail();
        return false;
    }

    Telefone = document.getElementById("tel").value;
    if (Telefone.length < 14) {
        validarTelefone();
        return false;
    } else {
        document.getElementById('passo01').style.display = "none";
        document.getElementById('passo02').style.display = "block";
        passo02 = 'active';
        buttonPopup = 1;
        //alert(etapas)
    }

    if (document.getElementById('tipotransporte').selectedIndex > 0) { // Se estiver selecionado o tipo de veiculo

        //alert(document.getElementById('tipotransporte').selectedIndex);

        if (document.getElementById('tipotransporte').selectedIndex == 1) { // Se for carro                                                                

            if (document.getElementById('veiculomarcaValidacao').value == 0) { // Se NÃO estiver selecionado
                validarMarcaVeiculo();
                return false;
            }

            if (document.getElementById('veiculomodeloValidacao').value == 0) { // Se NÃO estiver selecionado
                validarModeloVeiculo();
                return false;                    
            }

            Valor = document.getElementById('veiculovalor').value;
            if (Valor.length <= 8) { // Se NÃO estiver digitado o valor corretamente
                validarValorVeiculo();
                return false; 
            } else {
                document.getElementById('passo02').style.display = "none";
                document.getElementById('passo03').style.display = "block";
                passo03 = 'active';                  
                passoEtapas(3);
            }

        }

    }

    if (document.getElementById('tipotransporte').selectedIndex == 2) { // Se for moto
        if (document.getElementById('motomarcaValidacao').value == 0) { // Se NÃO estiver selecionado
            validarCilindradas();
            return false; 
        }

        Valor = document.getElementById('veiculovalorMoto').value;
        if (Valor.length <= 8) { // Se NÃO estiver digitado o valor corretamente
            validarValorMoto();
            return false; 
        } else {
        document.getElementById('passo02').style.display = "none";
        document.getElementById('passo03').style.display = "block";
        passo03 = 'active';
        passoEtapas(3);
        }
    }

    if (document.getElementById('tipotransporte').selectedIndex == 3) { // Se for outros
        if (document.getElementById('categoriaveiculoValidacao').value == 0) { // Se NÃO estiver selecionado
            validarCategoria();
            return false; 
        } else {
        document.getElementById('passo02').style.display = "none";
        document.getElementById('passo03').style.display = "block";
        passo03 = 'active';
        passoEtapas(3);
        }
    }

    if (document.getElementById('tipotransporte').selectedIndex == 0) { // Se estiver selecionado o tipo de veiculo
        if (buttonPopup==2) {
            validarTipoVeiculo();
            return false;
        } else {            
            //document.getElementById('popup').style.display = "none";
            exibirPopUp('alertaPopUp');
            return false;
        }
    } 

    //document.getElementById("mensagemError").innerHTML = MsgErro;

    if (document.getElementById('estadoorigem').value == 0) {
        if (buttonPopup==2) {
            validarEstadoOrigem();
            return false;
        } else { 
            //document.getElementById('popup').style.display = "none";
            exibirPopUp('alertaPopUp');
            return false;
        }
    }

    if (document.getElementById('cidadeorigem').value == 0) {
        validarCidadeOrigem();
        return false;
    }

    if (document.getElementById('escolhacoletaValidacao').value == 0) {
        validarColeta();
        return false;
    }

    if (document.getElementById('estadoentrega').value == 0) {
        validarEstadoEntrega();
        return false;
    }

    if (document.getElementById('cidadeentrega').value == 0) {
        validarCidadeEntrega();
        return false;
    }

    if (document.getElementById('escolharetiradaValidacao').value == 0) {
        validarRetirada();
        return false;
    }

    if (document.getElementById('motivoValidacao').value == 0) {
        validarMotivo();
        return false;
    }

    dataTransporte = document.getElementById('datatransporte').value;
    if (dataTransporte.length < 8) {
        validarDataTransporte();
        return false;
    }

    if (document.getElementById('observacao').value == 0) {
        validarObservacao();
        return false;
    }

    if (!document.getElementById("Termosdeuso").checked) {
        validarTermo();
        return false;
    }

    if (!document.getElementById("whatsapp").checked) {
        validarWhatsapp();
        return false;
    }

    if (!validacaoCaptcha()) {
        validarCaptcha();
        return false;
    }

    if (MsgErro == "") {
        validarSucesso();
    }

}
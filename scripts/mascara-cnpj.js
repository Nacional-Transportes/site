//Executar Máscara
    function mascara(o, f) {
        v_obj = o;
        v_fun = f;
        setTimeout("execmascara()", 1);
    }
    function execmascara() {
        v_obj.value = v_fun(v_obj.value);
    }

    //Formato da Máscara Telefone
    function mascaraCnpj(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/,"$1.$2"); //Coloca ponto em volta dos três primeiros dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"); //Coloca ponto em volta dos três primeiros dígitos
        v = v.replace(/\.(\d{3})(\d)/,".$1/$2"); //Coloca hífen entre o quarto e o quinto dígitos
        v = v.replace(/(\d{4})(\d)/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

    //Tamanho máximo do caracter de telefone
    function tamanhoCaracterCnpj(field) {
        str = field.value;
        if (str.length > 18) {
            field.value = str.substring(0, str.length - 1);
        }
    }

    //Retorna o elemento
    function id(el) {
        return document.getElementById(el);
    }

    //Carrega a função com a ação do keypress
    window.onload = function () {
        id("cnpjID").onkeyup  = function () {
            mascara(this, mascaraCnpj);
            tamanhoCaracterCnpj(this);
        };
    };
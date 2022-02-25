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
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

//Tamanho máximo do caracter de telefone
function tamanhoCaracterTelefone(field) {
  str = field.value;
  if (str.length > 15) {
    field.value = str.substring(0, str.length - 1);
  }
}

//Retorna o elemento
function id(el) {
  return document.getElementById(el);
}

//Carrega a função com a ação do keypress
window.onload = function () {
  id("tel").onkeyup  = function () {
    mascara(this, mtel);
    tamanhoCaracterTelefone(this);
  };
  /* id("tel2").onkeyup = function () {
    mascara(this, mtel);
    tamanhoCaracterTelefone(this);
  }; */
};


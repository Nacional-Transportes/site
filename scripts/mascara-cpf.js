//Executar Máscara
function mascara02(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara02()", 1);
}
function execmascara02() {
  v_obj.value = v_fun(v_obj.value);
}

//Formato da Máscara Telefone
function mascaraCpf(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca ponto em volta dos três primeiros dígitos
  v = v.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca ponto em volta dos três primeiros dígitos
  v = v.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

//Tamanho máximo do caracter de telefone
function tamanhoCaracterCpf(field) {
  str = field.value;
  if (str.length > 14) {
      field.value = str.substring(0, str.length - 1);
  }
}

//Retorna o elemento
function id(el) {
  return document.getElementById(el);
}

//Carrega a função com a ação do keypress
window.onload = function () {
  id("cpfID").onkeyup  = function () {
      mascara(this, mascaraCpf);
      tamanhoCaracterCpf(this);
  };
};
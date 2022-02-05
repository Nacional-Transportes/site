var qs = function (el) {
  return document.querySelector(el);
};

qs("#veiculomarcaValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#marcaveiculo option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert();

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel);
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida da marca do veículo";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomarcaValidacao').empty();
        document.getElementById('veiculomarcaValidacao').value = null;
        document.getElementById('marcaveiculo').value = null;
        foco="marcaveiculo";
  }
});

var qs10 = function (el) {
  return document.querySelector(el);
};

qs10("#veiculomodeloValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#veiculomodelo option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert(optSel);

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel); 
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida do modelo do veículo";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomodeloValidacao').empty();
        document.getElementById('veiculomodeloValidacao').value = null;
        document.getElementById('veiculomodelo').value = null;
        foco="modeloveiculo";
  }
});


var qs2 = function (el) {
  return document.querySelector(el);
};

qs2("#motomarcaValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#marcamotolist option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert(optSel);

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel);
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida da cilindrada da moto";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomarcaValidacao').empty();
        document.getElementById('motomarcaValidacao').value = null;
        document.getElementById('marcamotolist').value = null;
        foco="cilindradas";
  }
});

var qs3 = function (el) {
  return document.querySelector(el);
};

qs3("#categoriaveiculoValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#outroCategoriaList option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert(optSel);

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel);
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida da categoria";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomarcaValidacao').empty();
        document.getElementById('categoriaveiculoValidacao').value = null;
        document.getElementById('outroCategoriaList').value = null;
        foco="categoria";
  }
});

var qs4 = function (el) {
  return document.querySelector(el);
};

qs4("#escolhacoletaValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#escolhacoleta option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert(optSel);

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel);
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida do modo de coleta";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomarcaValidacao').empty();
        document.getElementById('escolhacoletaValidacao').value = null;
        document.getElementById('escolhacoleta').value = null;
        foco="coleta";
  }
});

var qs5 = function (el) {
  return document.querySelector(el);
};

qs5("#escolharetiradaValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#escolharetirada option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert(optSel);

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel);
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida do modo de retirada";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomarcaValidacao').empty();
        document.getElementById('escolharetiradaValidacao').value = null;
        document.getElementById('escolharetirada').value = null;
        foco="retirada";
  }
});

var qs6 = function (el) {
  return document.querySelector(el);
};

qs6("#motivoValidacao").addEventListener("change", function (e) {

  MsgErro = '';
  foco = "";
  var datalist = document.body.querySelectorAll("#motivo option");
  var opt = [].map.call(datalist, function (o) {
    return o.textContent;
  });

  var optSel = ~opt.indexOf(e.target.value) ? true : false;

  //alert(optSel);

  // se optSel for true, significa que o valor existe no datalist
  if (optSel == true) {
    //console.log(optSel);
    //alert(optSel);
  }
  if (optSel == false) {
    //console.log(optSel);
    //alert(optSel);
    exibirPopUp('alertaPopUp');
    MsgErro = MsgErro + "Insira uma informação válida do motivo";
        document.getElementById("mensagemError").innerHTML = MsgErro;
        //document.getElementById('veiculomodeloValidacao').value == '0';        
        //$('#veiculomarcaValidacao').empty();
        document.getElementById('motivoValidacao').value = null;
        document.getElementById('motivo').value = null;
        foco="motivo";
  }
});
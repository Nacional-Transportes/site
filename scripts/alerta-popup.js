function popUp(op) {
    if (op == 1) {
      document.getElementById("alertaPopUp").style.display = "none";

      if (foco=="nomecompleto") { document.getElementById("nomecompleto").focus(); }
      if (foco=="email") { document.getElementById("email").focus(); }
      if (foco=="telefone") { document.getElementById("tel").focus(); }
      if (foco=="tipoveiculo") { document.getElementById("tipotransporte").focus(); }
      if (foco=="marcaveiculo") { document.getElementById("veiculomarcaValidacao").focus(); }
      if (foco=="modeloveiculo") { document.getElementById("veiculomodeloValidacao").focus(); }
      if (foco=="valorveiculo") { document.getElementById("veiculovalor").focus(); }
      if (foco=="valorveiculomoto") { document.getElementById("veiculovalorMoto").focus(); }
      if (foco=="cilindradas") { document.getElementById("motomarcaValidacao").focus(); }
      if (foco=="categoria") { document.getElementById("categoriaveiculoValidacao").focus(); }
      if (foco=="estadoorigem") { document.getElementById("estadoorigem").focus(); }
      if (foco=="cidadeorigem") { document.getElementById("cidadeorigem").focus(); }
      if (foco=="coleta") { document.getElementById("escolhacoletaValidacao").focus(); }
      if (foco=="estadoentrega") { document.getElementById("estadoentrega").focus(); }
      if (foco=="cidadeentrega") { document.getElementById("cidadeentrega").focus(); }
      if (foco=="retirada") { document.getElementById("escolharetiradaValidacao").focus(); }
      if (foco=="motivo") { document.getElementById("motivoValidacao").focus(); }
      if (foco=="datatransporte") { document.getElementById("datatransporte").focus(); }
      if (foco=="observacoes") { document.getElementById("observacoes").focus(); }
               
      
      //var element = document.getElementById("html-popup");
      //element.classList.add("html-popup-auto");
      //setTimeout ("fecharPopup(2)", 6000);
    }

    if (op == 2) {
      window.location.assign("index.php");
    }
}

  //if (fecharPopup == 2) {
  //    document.getElementById('alertaPopUp').style.display="none";
  //  }
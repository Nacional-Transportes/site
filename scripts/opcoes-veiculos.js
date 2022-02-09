function editarTipoDeVeiculo() {
    var select = document.getElementById("tipotransporte");
    var value = select.options[select.selectedIndex].value;

    //alert(select.selectedIndex);

    if (select.selectedIndex == 0) {
      EscondeDiv("opcaoCarro");
      EscondeDiv("opcaoMoto");
      EscondeDiv("opcaoOutro");
      document.getElementById('veiculomarcaValidacao').value = null;
      document.getElementById('veiculomodeloValidacao').value = null;
      document.getElementById('veiculovalor').value = null;
      document.getElementById('motomarcaValidacao').value = null;
      document.getElementById('veiculovalorMoto').value = null;
      document.getElementById('categoriaveiculoValidacao').value = null;
    }

    if (select.selectedIndex == 1) {
      ExibirDiv("opcaoCarro");
      EscondeDiv("opcaoMoto");
      EscondeDiv("opcaoOutro");
      document.getElementById('motomarcaValidacao').value = null;
      document.getElementById('veiculovalorMoto').value = null;
      document.getElementById('categoriaveiculoValidacao').value = null;
    }

    if (select.selectedIndex == 2) {
      EscondeDiv("opcaoCarro");
      ExibirDiv("opcaoMoto");
      EscondeDiv("opcaoOutro");
      document.getElementById('veiculomarcaValidacao').value = null;
      document.getElementById('veiculomodeloValidacao').value = null;
      document.getElementById('veiculovalor').value = null;
      document.getElementById('categoriaveiculoValidacao').value = null;
    }

    if (select.selectedIndex == 3) {
      EscondeDiv("opcaoCarro");
      EscondeDiv("opcaoMoto");
      ExibirDiv("opcaoOutro");
      document.getElementById('veiculomarcaValidacao').value = null;
      document.getElementById('veiculomodeloValidacao').value = null;
      document.getElementById('veiculovalor').value = null;
      document.getElementById('motomarcaValidacao').value = null;
      document.getElementById('veiculovalorMoto').value = null;
    }

    /*AlterouIndex();*/
}

function ExibirDiv(divid) {
    document.getElementById(divid).style.display = "flex";
}

function EscondeDiv(divid) {
    document.getElementById(divid).style.display = "none";
}
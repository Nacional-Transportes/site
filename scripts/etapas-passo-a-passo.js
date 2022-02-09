etapas = 1;
//alert(etapas);
//Passos - Passo atual
//Etapas - Etapa 

function passoEtapas(etapas) {
    if (etapas == 1) {
        document.getElementById('passo01').style.display="block";
        document.getElementById('passo02').style.display="none";
        document.getElementById('passo03').style.display="none";
        etapas=0;
        
        //alert('entrou 01');
        //alert(etapas);

        mudarCorPassos = 1;

        document.getElementById("buttonEnviarForm").textContent="Próximo";

    }
    
    if (etapas == 2 && passo02 == "active") {
        document.getElementById('passo01').style.display="none";
        document.getElementById('passo02').style.display="block";
        document.getElementById('passo03').style.display="none";
        etapas=1;

        //alert('entrou 02');
        //alert(etapas);

        mudarCorPassos = 2;

        document.getElementById("buttonEnviarForm").textContent="Próximo";

    }

    if (etapas == 3 && passo03 == "active") {
        document.getElementById('passo01').style.display="none";
        document.getElementById('passo02').style.display="none";
        document.getElementById('passo03').style.display="block";
        etapas=2;
        
        //alert('entrou 03');
        //alert(etapas);

        mudarCorPassos = 3;

        document.getElementById("buttonEnviarForm").textContent="Enviar";
    }

    if (mudarCorPassos == 1) {
        var passo01Etapas02 = document.getElementById("passo01Etapas02");
        passo01Etapas02.classList.remove("active");
        passo01Etapas02.classList.add("click");
    }

    if (mudarCorPassos == 2 ) {
        var passo02Etapas01 = document.getElementById("passo02Etapas01");
        passo02Etapas01.classList.remove("active");
        passo02Etapas01.classList.add("click");
    }

    if (mudarCorPassos == 3 ) {
        var passo01Etapas03 = document.getElementById("passo01Etapas03");
        passo01Etapas03.classList.remove("active");
        passo01Etapas03.classList.add("click");

        var passo01Etapas02 = document.getElementById("passo01Etapas02");
        passo01Etapas02.classList.remove("active");
        passo01Etapas02.classList.add("click");

        var passo02Etapas01 = document.getElementById("passo02Etapas01");
        passo02Etapas01.classList.remove("active");
        passo02Etapas01.classList.add("click");

        var passo02Etapas03 = document.getElementById("passo02Etapas03");
        passo02Etapas03.classList.remove("active");
        passo02Etapas03.classList.add("click");
    }
    
}
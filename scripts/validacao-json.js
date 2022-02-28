jQuery(document).ready(function ($) {
    $('#veiculomarcaValidacao').on('change', function (event) {
        var loc = $(this).val();
        var $modelo = $("#veiculomodelo");

        if (document.getElementById('veiculomarcaValidacao').value == 0 ) {
            document.getElementById('veiculomodeloValidacao').value = null;
            document.getElementById('veiculomodelo').value = null;
        }

        if (loc != '') {
            $.getJSON("https://nacional-transportes.github.io/site/marcas/" + loc + ".json", function (data) {

                // $modelo.show();

                var vals = [];
                vals = data.modelos.split(",");

                vals.sort();

                $modelo.empty();
                $modelo.append("<option data-value=\"\">Selecione uma marca</option>");

                $.each(vals, function (index, value) {
                    $modelo.append("<option data-value=\"" + value + "\">" + value + "</option>");
                });
            });
        } else {
            // $modelo.hide();
            $modelo.empty();
            $modelo.append("<option data-value=\"\">Selecione uma marca</option>");
            //$modelo.css('color','pink');
        };

        //AlterouIndex();
    });
});


     
jQuery(document).ready(function($) {
    $('#estadoorigem').on('change', function(event) {
        var loc = $(this).val();
        var $cidade = $("#cidadeorigem");

        if (loc != '') {
            $.getJSON("https://nacional-transportes.github.io/site/estados/" + loc + ".json", function(data) {

                var vals = [];
                vals = data.cidades.split(",");

                $cidade.empty();
                $cidade.append("<option value=\"\">Selecione uma cidade</option>");

                $.each(vals, function(index, value) {
                    $cidade.append("<option value=\"" + value + "\">" + value + "</option>");
                });
            });
        } else {
            $cidade.empty();
            $cidade.append("<option value=\"\">Selecione um estado</option>");
        };

        //AlterouIndex();
    }); 
});


jQuery(document).ready(function($) {
    $('#estadoentrega').on('change', function(event) {
        var loc = $(this).val();
        var $cidade = $("#cidadeentrega");

        if (loc != '') {
            $.getJSON("https://nacional-transportes.github.io/site/estados/" + loc + ".json", function(data) {

                var vals = [];
                vals = data.cidades.split(",");

                $cidade.empty();
                $cidade.append("<option value=\"\">Selecione uma cidade</option>");

                $.each(vals, function(index, value) {
                    $cidade.append("<option value=\"" + value + "\">" + value + "</option>");
                });
            });
        } else {
            $cidade.empty();
            $cidade.append("<option value=\"\">Selecione um estado</option>");
        };

        //AlterouIndex();
    }); 
});
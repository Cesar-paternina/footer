 $(document).ready(function(){
    var preguntas = 0;
    var pregunta_actual = 1;
    var nota = 0;

    $("#login").show();
    $("#preguntas").hide();
    $("#div-resultados").hide();

    $("#form-login").on('submit', function(evt){
      evt.preventDefault();
    });

    var usuario = "";

    $("#boton-login").click(function(){       
      usuario = $("#input-usuario").val();
      $("#usuario").html(""+usuario);
      $("#nota").html("0.0");
      $("#login").hide();
      $("#preguntas").show("slow");
    });

    $('[id^="pregunta-"]').click(function(){
      $(this).parent().parent().find('li').css("background-color","#F5F5F5");
      $(this).parent().parent().find('li').css("color","#E03516");
      $(this).parent().css("background-color","#B711C");   
      $(this).parent().css("color","#FFFFFF");
    });

    $('[id^="evaluar-"]').click(function(){
      var id      = ($(this).attr('id'));
      var arreglo = id.split("-");
      var codigo  = arreglo[1];
      $(this).hide();
      $('[id^="pregunta-'+codigo+'"]').attr('disabled', 'disabled');
      preguntas++;
      $("#contestadas").html(""+preguntas);
      $("#progreso").attr('value', preguntas);

      
      if(codigo==1){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==2){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==2){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==3){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==3){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==1){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==4){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==4){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==5){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==4){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==6){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==1){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==7){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==1){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==8){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==1){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      else if(codigo==9){
        var respuesta = $('input:radio[name=pregunta-'+codigo+']:checked').val();
        if(respuesta==1){
          $("#cuadro-"+codigo).css("background-color", "#03DE3B");
          nota += 5/9;
          $("#nota").html(""+nota.toFixed(2));
        }
        else{
          $("#cuadro-"+codigo).css("background-color", "#E80707");
        }
      }
      if(preguntas==9){
        $(".slider").hide();  
        $("#div-resultados").show('slow'); 
        $("#botones").hide(); 
        $("#contador-preguntas").hide(); 

        $.ajax({            
          type: "POST",
          url: 'guardar.php',
          data: {estudiante: $("#usuario").html(), nota2: nota.toFixed(2)},
          success: function(respuesta){
          }
        });   
      }
    });
  });
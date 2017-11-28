function buscar(param) {
    var coincidencias = [];
    $(".modal-body").empty();
    var valor = $("#inputBuscador"+param).val();
    $.get('https://h3rrero.github.io/ROpage/index.html', function(response) {
    if(response.indexOf(valor)>-1)
    {
     
      $(".modal-body").append("<p>Index:</p>");
      $(".modal-body").append("<a href='"+"https://h3rrero.github.io/ROpage/index.html"+"'>"+"https://h3rrero.github.io/ROpage/index.html"+"</a>");
    }
    
  });
    $.get('https://h3rrero.github.io/ROpage/src/noticias.html', function(response) {
      if(response.indexOf(valor)>-1)
      {
        $(".modal-body").append("<p>Noticias:</p>");
        $(".modal-body").append("<a href='"+"https://h3rrero.github.io/ROpage/src/noticias.html"+"'>"+"https://h3rrero.github.io/ROpage/src/noticias.html"+"</a>");
      
      }
  });
  $.get('https://h3rrero.github.io/ROpage/src/plantilla.html', function(response) {
    if(response.indexOf(valor)>-1)
    {
      $(".modal-body").append("<p>Plantilla:</p>");
      $(".modal-body").append("<a href='"+"https://h3rrero.github.io/ROpage/src/plantilla.html"+"'>"+"https://h3rrero.github.io/ROpage/src/plantilla.html"+"</a>");
    
    }
  });
  $.get('https://h3rrero.github.io/ROpage/src/contacto.html', function(response) {
    if(response.indexOf(valor)>-1)
    {
      $(".modal-body").append("<p>Contacto:</p>");
      $(".modal-body").append("<a href='"+"https://h3rrero.github.io/ROpage/src/contacto.html"+"'>"+"https://h3rrero.github.io/ROpage/src/contacto.html"+"</a>");
    
    }
  });

  
  
  }
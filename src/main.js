function buscar(param) {
    var coincidencias = [];
    $(".modal-body").empty();
    var valor = $("#inputBuscador"+param).val();
    $.get('https://h3rrero.github.io/ROpage/index.html', function(response) {
    if(response.indexOf(valor)>-1)
    {
      coincidencias.push({
        url:"https://h3rrero.github.io/ROpage/index.html",
        name:"Index"
      });
    }
    
  });
    $.get('https://h3rrero.github.io/ROpage/src/noticias.html', function(response) {
      if(response.indexOf(valor)>-1)
      {
        coincidencias.push({
          url:"https://h3rrero.github.io/ROpage/src/noticias.html",
          name:"Noticias"
        });
      }
  });
  $.get('https://h3rrero.github.io/ROpage/src/plantilla.html', function(response) {
    if(response.indexOf(valor)>-1)
    {
      coincidencias.push({
        url:"https://h3rrero.github.io/ROpage/src/plantilla.html",
        name:"Plantilla"
      });
    }
  });
  $.get('https://h3rrero.github.io/ROpage/src/contacto.html', function(response) {
    if(response.indexOf(valor)>-1)
    {
      coincidencias.push({
        url:"https://h3rrero.github.io/ROpage/src/contacto.html",
        name:"Contacto"
      });
    }
  });
 
  setTimeout(function (params) {
    for (const i in coincidencias) {
      $(".modal-body").append("<p>"+coincidencias[i].name+":</p>");
          $(".modal-body").append("<a href='"+coincidencias[i].url+"'>"+coincidencias[i].url+"</a>");
  }
  }      
  , 1);
  
  
  }
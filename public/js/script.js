$(function () {
  ajax = new Ajax()
  ajax.getAjax("/kategoria", kategoriakKilistazasa)
  ajax.getAjax("/tesztek", kerdesekLetrehozasa)

  function kategoriakKilistazasa(kategoriak) {
    kategoriak.forEach(element => {
      $("#kategoriak").append("<option id = " + element.id + ">" + element.kategorianev + "</option>")
    });
  }
  function kerdesekLetrehozasa(tesztek) {
    tesztek.forEach(element => {
      let elem = $("<div class = 'kerdes'></div>").appendTo("#kerdesek")
      new TesztKerdes(elem, element)
    });
  }
  $("#kategoriak").on("change", function () {
    var options = $(this)[0].options;
    var kivalasztottKategoriaId = options[options.selectedIndex].id;
    ajax.getAjax("/tesztek", kerdesekLetrehozasaKategoriaSzerint)
    function kerdesekLetrehozasaKategoriaSzerint(tesztek) {
      $("#kerdesek").empty()
      tesztek.forEach(element => {
        if (element.kategoriaId == kivalasztottKategoriaId) {
          let elem = $("<div class = 'kerdes'></div>").appendTo("#kerdesek")
          new TesztKerdes(elem, element)
        }
      });
    }
  })
  $(window).on("valaszBejelolese",(event)=>{
    $(event.detail.kivalasztva).css("background-color","blue")
    setTimeout(function(){
      if($(event.detail.kivalasztva).text() == event.detail.adat.helyes){
        $(event.detail.kivalasztva).css("background-color","green")
      }
      else{
        $(event.detail.kivalasztva).css("background-color","red")
      }
    },1000)
  })
})
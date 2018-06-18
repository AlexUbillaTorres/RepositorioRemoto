(function(){
	function onSuccess(data){
		console.log(data);
	}
	
	$.ajax({
       type: "GET",
       url: "data/citas.xml",
       contentType: "text/xml",
       dataType: "xml",
       success: onSuccess,
	})
})();

function buscador(){	

var datos=document.getElementById('texto');
var clases=document.querySelectorAll("div[class='well']");
for(elemento of clases){
	if(elemento.textContent.search(datos)>0 && datos!=''){
		console.log(elemento);
    }
  }
}

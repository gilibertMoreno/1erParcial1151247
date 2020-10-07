function loadDocs(){
    var xhttp= new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            var lista=document.createElement('ul');
            for(i=0; i<obj.length; i++){
                var opcicion=document.createElement('li');
                opcicion.textContent =obj[i];
                lista.appendChild(opcicion);
            }
            
            document.querySelector("#CargarDatos").appendChild(lista);
        }
    }

    xhttp.open("GET", "https://www.datos.gov.co/resource/gt2j-8ykr.json",true);
    xhttp.send();
}

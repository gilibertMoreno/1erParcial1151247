function loadDocs(){
    var xhttp= new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var obj = JSON.parse(this.responseText);
            console.log(obj);

            var lista=document.createElement('table');
            lista.setAttribute('class', 'table')
            var currenttable=document.getElementById('tb');
            document.body.insertBefore(lista, currenttable);

            var head=document.createElement('thead');
            var tr=document.createElement('tr');


            var th1=document.createElement('th');
            th1.setAttribute("scope","col");
            var notificacion=document.createTextNode('Fecha de notificacion');
            th1.appendChild(notificacion);

            var th2=document.createElement('th');
            th2.setAttribute("scope","col");
            var notificacion2=document.createTextNode('Ciudad de ubicación');
            th2.appendChild(notificacion2);

            var th3=document.createElement('th');
            th3.setAttribute("scope","col");
            var notificacion3=document.createTextNode('atencion');
            th3.appendChild(notificacion3);

            var th4=document.createElement('th');
            th4.setAttribute("scope","col");
            var notificacion4=document.createTextNode('Edad');
            th4.appendChild(notificacion4);

            var th5=document.createElement('th');
            th5.setAttribute("scope","col");
            var notificacion5=document.createTextNode('Sexo');
            th5.appendChild(notificacion5);

            var th6=document.createElement('th');
            th6.setAttribute("scope","col");
            var notificacion6=document.createTextNode('Tipo');
            th6.appendChild(notificacion6);

            var th7=document.createElement('th');
            th7.setAttribute("scope","col");
            var notificacion7=document.createTextNode('Estado');
            th7.appendChild(notificacion7);

            var th8=document.createElement('th');
            th8.setAttribute("scope","col");
            var notificacion8=document.createTextNode('Ubicacion recuperado');
            th8.appendChild(notificacion8);




            tr.appendChild(th1)
            tr.appendChild(th2)
            tr.appendChild(th3)
            tr.appendChild(th4)
            tr.appendChild(th5)
            tr.appendChild(th6)
            tr.appendChild(th7)
            tr.appendChild(th8)

            head.appendChild(tr)
            lista.appendChild(head)
            //document.body.insertBefore(th1, currentth1)
            //th1.textContent='Fecha de notificacion'
            //th1.textContent('Fecha de notificacion')
           // tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('Ciudad de ubicación'));
            //tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('atencion'));
            //tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('Edad'));
            //tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('Sexo'));
            //tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('Tipo'));
            //tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('Estado'));
            //tr.appendChild(document.createElement('th').setAttribute("scope","col").textContent('ubicación recuperado'));
            var tbody=document.createElement('tbody', '.cargardatos')
            
            for(i=0; i<25; i++){
                var tr1=document.createElement('tr');

                var td=document.createElement('td');
                var notificacion=document.createTextNode(obj[i].fecha_de_notificaci_n);
                td.appendChild(notificacion);

                var td2=document.createElement('td');
                var notificacion2=document.createTextNode(obj[i].ciudad_de_ubicaci_n);
                td2.appendChild(notificacion2);

                var td3=document.createElement('td');
                var notificacion3=document.createTextNode(obj[i].atenci_n);
                td3.appendChild(notificacion3);

                var td4=document.createElement('td');
                var notificacion4=document.createTextNode(obj[i].edad);
                td2.appendChild(notificacion4);

                var td5=document.createElement('td');
                var notificacion5=document.createTextNode(obj[i].sexo);
                td5.appendChild(notificacion5);

                var td6=document.createElement('td');
                var notificacion6=document.createTextNode(obj[i].tipo);
                td6.appendChild(notificacion6);

                var td7=document.createElement('td');
                var notificacion7=document.createTextNode(obj[i].estado);
                td7.appendChild(notificacion7);

                var td8=document.createElement('td');
                var notificacion8=document.createTextNode(obj[i].ubicaci_n_recuperado);
                td8.appendChild(notificacion8);



                tr1.appendChild(td);
                tr1.appendChild(td2);
                tr1.appendChild(td3);
                tr1.appendChild(td4);
                tr1.appendChild(td5);
                tr1.appendChild(td6);
                tr1.appendChild(td7);
                tr1.appendChild(td8);


                tbody.appendChild(tr1);

               
                
                
               
                
                //var tr2th2=document.createElement('th')
                //tr2th2.setAttribute("scope","row")
                //tr2th2.textContent(obj[i].ciudad_de_ubicaci_n)
                


                //tr2.appendChild(document.createElement('th').setAttribute("scope","row").textContent(obj[i].atenci_n))
                //tr2.appendChild(document.createElement('th').setAttribute("scope","row").textContent(obj[i].edad))
                //tr2.appendChild(document.createElement('th').setAttribute("scope","row").textContent(obj[i].sexo))
                //tr2.appendChild(document.createElement('th').setAttribute("scope","row").textContent(obj[i].tipo))
                //tr2.appendChild(document.createElement('th').setAttribute("scope","row").textContent(obj[i].estado))
                //tr2.appendChild(document.createElement('th').setAttribute("scope","row").textContent(obj[i].pa_s_de_procedencia))

               // var opcicion=document.createElement('li');
                //var opcion2=document.createElement('li');
                //opcicion.textContent =obj[i].id_de_caso;
                //opcion2.textContent =obj[i].fecha_de_notificaci_n;
                
                //console.log(obj[i].id_de_caso);
                //lista.appendChild(opcicion);
                //lista.appendChild(opcion2);
            }
            lista.appendChild(tbody);
            
            document.querySelector("#CargaDatos").appendChild(lista);
        }
    }

    xhttp.open("GET", "https://www.datos.gov.co/resource/gt2j-8ykr.json",true);
    xhttp.send();
}

//file json
var serverData = [];


var nextID = 10006;


//crea tabella
function tabellaCodice() {
  var righe = "";
  $.each(serverData["_embedded"]["employees"], function (key, value) {
    righe = righe + "<tr>";
    righe = righe + "<th>" + value.id + "</th>";
    righe = righe + "<td class ='nome'>" + value.firstName + "</td>";
    righe = righe + "<td class ='cognome'>" + value.lastName + "</td>";
    righe = righe + "<td class ='genere'>" + value.gender + "</td>";
    righe = righe + "<td>" + "<input type='button' class='btn btn-outline-warning' value='MODIFICA' onclick='modifica(" + value.id + ")' data-bs-toggle='modal' data-bs-target='#exampleModal1' data-bs-whatever='@mdo' 'id='" + nextID + "'>";
    righe = righe + "<br> <br>" + "<input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina(" + value.id + ")' id='" + value.id + "'>";
    righe = righe + "</tr>";
  });
  $("#tbody").html(righe);

}

$(document).ready(function () {

  $.get("http://localhost:8080/employees", function (msg) {
    //console.log(msg["_embedded"]["employees"]);
    serverData = msg;
    tabellaCodice();

  });
});

function elimina(id) {
  $("#" + id).closest("tr").remove();
}



function modifica(id){
  console.log(id)

  var riga = $("#" + id).closest("tr");
  var nome = riga.find(".nome").text();
  console.log(nome);
  var cognome = riga.find(".cognome").text();
  console.log(cognome);
  var genere = riga.find(".genere").text();
  console.log(genere);

  $("input#name").val(nome);
  $("input#lastname").val(cognome);
  $("input#gender").val(genere);


}

function effettuaModifica(){
  
}




/*
function linkA(){
  $.get(serverData[ "_links"]["next"]["href"], function(msg){
    serverData = msg;
    tabellaCodice();

  });
};

function linkF(){
  $.get(serverData[ "_links"]["first"]["href"], function(msg){
    serverData = msg;
    tabellaCodice();

  });
};

function linkI(){
  $.get(serverData[ "_links"]["profile"]["href"], function(msg){
    serverData = msg;
    tabellaCodice();

  });
};
$(document).ready(function () {
  $('#btn').click(function () {
    var righeadd = "";
    var firstName = $("#name").val();
    var lastName = $("#lastname").val();
    var gender = $("#gender").val();
    data.push({
      "id": nextID,
      "birthDate": "",
      "firstName": firstName,
      "gender": gender,
      "hireDate": "",

    })

    righeadd += "<tr>";
    righeadd += "<th>" + nextID + "</th>";
    righeadd += "<td>" + firstName + "</td>";
    righeadd += "<td>" + lastName + "</td>";
    righeadd += "<td>" + gender + "</td>";
    righeadd += "<td>" + "<input type='button' class='btn btn-outline-warning' value='MODIFICA' data-bs-toggle='modal' data-bs-target='#exampleModal' 'id='" + nextID + "'>";
    righeadd += "<br> <br><input type='button' class='btn btn-danger' value='RIMUOVI' onclick='elimina(" + nextID + ")' id='" + nextID + "'>";
    righeadd += "</tr>";
    nextID++;
    $('#tbody').append(righeadd);
  });

  $('#btn1').click(function () {



  })

});
*/

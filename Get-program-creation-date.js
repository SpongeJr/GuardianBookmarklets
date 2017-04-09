/** This Javascript returns the time a project was last updated and first created.
  *
  * The dates can help users/guardians know which projects are originals or copies.
  *
  * https://www.khanacademy.org/computer-programming/get-program-creation-date/5449894928384000
  *
  * @Jett_2017
**/


// Indented and clean code
var ID = window.location.href.split("/")[5];
var date = document.getElementsByClassName("about_anfflz");

$.getJSON("https://www.khanacademy.org/api/labs/scratchpads/" + ID, function(data) {
    date[0].childNodes[date[0].childElementCount-1].childNodes[9].innerHTML = "<br>Created: " + data.created + "<br>Last updated: " + data.date;
});


// Minified code
javascript:var ID=window.location.href.split("/")[5],date=document.getElementsByClassName("about_anfflz");$.getJSON("https://www.khanacademy.org/api/labs/scratchpads/" + ID, function(data){date[0].childNodes[date[0].childElementCount-1].childNodes[9].innerHTML=("<br>Created: "+data.created+"<br>Last updated: "+data.date);});


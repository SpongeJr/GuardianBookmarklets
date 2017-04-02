/** This Javascript returns the time a project was last updated and first created.
  *
  * The dates can help users/guardians know which projects are originals or copies.
  *
  * https://www.khanacademy.org/computer-programming/get-program-creation-date/5449894928384000
  *
  * @Jett_2017
**/


// Indented and clean code
var ID = window.location.href.split("/")[5],
box = document.getElementById("save-progress-text"),

getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        callback(xhr.response);
    };
    xhr.send();
};
function getDate(data) {
    box.style.textAlign = "center";
    box.innerHTML = "Created: " + data.created + "<br> Last updated: " + data.date
};
getJSON("https://www.khanacademy.org/api/labs/scratchpads/" + ID, function(data){
    getDate(data);
});


// Minified code
javascript:var ID=window.location.href.split("/")[5],box=document.getElementById("save-progress-text"),getJSON=function(url,callback){var xhr=new XMLHttpRequest();xhr.open('GET',url,true);xhr.responseType='json';xhr.onload=function(){callback(xhr.response)};xhr.send()};function getDate(data){box.style.textAlign="center";box.innerHTML="Created: "+data.created+"<br> Last updated: "+data.date};getJSON("https://www.khanacademy.org/api/labs/scratchpads/" + ID, function(data){getDate(data);});

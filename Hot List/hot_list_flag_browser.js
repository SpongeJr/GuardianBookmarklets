var programLinks = document.getElementsByClassName("link_1uvuyao-o_O-noUnderline_4133r1"),
    i = 0,
    getJSON = function(a, c) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !0);
        b.responseType = "json";
        b.onload = function() {
            var a = b.status;
            200 == a ? c(null, b.response) : c(a)
        };
        b.send()
    };

function handleResponse(a) {
    ids.push(+programLinks[counter].href.split("/")[5]);
    objs.push(a);
    if (counter === programLinks.length - 1)
        for (result = objs.sort(function(a, b) {
                return ids.indexOf(a.id) < ids.indexOf(b.id) ? -1 : 1
            }), a = 0; a < result.length; a++) {
            programLinks[a].nextSibling.nextSibling.innerHTML += " \u00b7 <span title=\"" + result[a].flags.join('\n') + "\">" + result[a].flags.length + " Flag" + (1 === result[a].flags.length ? "" : "s")
        }
}
for (; i < programLinks.length; i++) {
    var id = programLinks[i].href.split("/")[5],
        counter = 0,
        ids = [],
        objs = [],
        result;
    getJSON("https://www.khanacademy.org/api/internal/scratchpads/" + id, function(a, c) {
        handleResponse(c);
        counter++
    })
}

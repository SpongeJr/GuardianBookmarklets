var i = 0,
  $buttonDiv = $('<button onClick="decrease();" id="prev-evalBrowse" aria-disabled="false" class="kui-button base_1h2bej0-o_O-notDisabled_ro0g1e-o_O-small_10vmyc6-o_O-base_t6mlt4-o_O-notDisabled_lhbaf0" style="width: auto;">Prev</button>&emsp;&emsp;&emsp;<button onClick="increase();" id="next-evalBrowse" aria-disabled="false" class="kui-button base_1h2bej0-o_O-notDisabled_ro0g1e-o_O-small_10vmyc6-o_O-base_t6mlt4-o_O-notDisabled_lhbaf0" style="width: auto;">Next</button>'),
  $evDiv = $("div.eval-container"),
  $statusDiv = $('<div id="evalBrowse-status" value="0">Loading Evaluations. . .<span>');
$evDiv.prepend($statusDiv);
$statusDiv.after($buttonDiv);
var projID = document.location.pathname.split("/")[3],
  handleResponse = function(a) {
    a = a.feedback[0].answers;
    var b = a[document.getElementById("evalBrowse-status").value].authorKaid,
      c = a[document.getElementById("evalBrowse-status").value].authorNickname,
      d = a[document.getElementById("evalBrowse-status").value].content;
    $statusDiv.html("Loaded! Showing Eval " + (document.getElementById("evalBrowse-status").value + 1) + " of " + a.length + ". Eval by " + c + " (<a href=\"https://www.khanacademy.org/profile/" + b + "\">" + b + "</a>)");
    $(".eval-left").html(d)
  };

function increase() {
  $.getJSON("https://www.khanacademy.org/api/internal/discussions/scratchpad/" + projID + "/projectfeedback", function(a) {
    return a.feedback[0].answers.length === i + 1 ? i : i++;
  })
  document.getElementById("evalBrowse-status").value = i
}

function decrease() {
  0 > i - 1 ? i : i--;
  document.getElementById("evalBrowse-status").value = 0 <= i ? i : 0
}
var requestEvals = function(a) {
  $.getJSON("https://www.khanacademy.org/api/internal/discussions/scratchpad/" + projID + "/projectfeedback", function(a) {
    handleResponse(a)
  })
};
$evDiv.on('click', requestEvals);

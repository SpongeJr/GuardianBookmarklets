var i = 0,
  $nextButtonDiv = $('<div class="inlineButtonContainer_1srpyz7"><button onClick="increase();" id="next-evalBrowse" aria-disabled="false" class="kui-button base_1h2bej0-o_O-notDisabled_ro0g1e-o_O-small_10vmyc6-o_O-base_t6mlt4-o_O-notDisabled_lhbaf0" style="width: auto;">Next</button></div>'),
  $prevButtonDiv = $('<div class="inlineButtonContainer_1srpyz7"><button onClick="decrease();" id="prev-evalBrowse" aria-disabled="false" class="kui-button base_1h2bej0-o_O-notDisabled_ro0g1e-o_O-small_10vmyc6-o_O-base_t6mlt4-o_O-notDisabled_lhbaf0" style="width: auto;">Prev</button></div>'),
  $evDiv = $("div.eval-container"),
  $statusDiv = $('<div id="evalBrowse-status" value="0">Loading Evaluations. . .<span>');
$evDiv.prepend($statusDiv);
$statusDiv.after($nextButtonDiv).after($prevButtonDiv);
var projID = document.location.pathname.split("/")[3],
  handleResponse = function(a) {
    console.log(a);
    a = a.feedback[0].answers;
    var b = a[document.getElementById("evalBrowse-status").value].authorKaid,
      c = a[document.getElementById("evalBrowse-status").value].authorNickname,
      d = a[document.getElementById("evalBrowse-status").value].content;
    $statusDiv.text("Loaded! Showing Eval " + (document.getElementById("evalBrowse-status").value + 1) + " of " + a.length + ". Eval by " + c + " (" + b + ")");
    $(".eval-left").html(d)
  };

function increase() {
  4 >= i + 1 ? i++ : i;
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

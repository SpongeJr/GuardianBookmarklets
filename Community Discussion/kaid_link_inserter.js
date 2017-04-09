$("a[data-user-kaid]").after(function() {
  var a = $(this).attr("data-user-kaid"),
    b = '<a href="https://www.khanacademy.org/profile/' + a + '">' + a + "</a>";
  return b
});

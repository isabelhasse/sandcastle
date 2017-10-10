$(function(){
  $("#show-castle1").click(function() {
    $("#charming-sandcastle").show();
  });
  $("#show-castle2").click(function() {
    $("#elaborate-sandcastle").show();
  });
  $("#show-castle3").click(function() {
    $("#unusual-sandcastle").show();
  });
  $(".highlight").click(function(){
    $(this).addClass("highlight-box");
  });
});

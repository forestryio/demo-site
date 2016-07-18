$('#slidemenu a').on("click",function(){
var clicker = $(this).attr("slide");
$('#slides div').addClass('hide');
$('#'+clicker).addClass('show')
});

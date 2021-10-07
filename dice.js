$(document).ready(function(){
    var o=[],e=$("#dice__cube"),i=1e3*e.css("transition-duration").split(",")[0].replace(/[^-\d\.]/g,"");
    
    function n(a){var t=e.attr("class").split(" ")[0],s="show-"+a;e.removeClass(),t==s?(e.addClass(s+" show-same"),setTimeout(function(){e.removeClass("show-same")},i)):e.addClass(s),o.push(a)}
    
    $("#dice__btn").on("click ",function(){
        var a,t,s,o=(a=1,t=6,Math.floor(Math.random()*t+a));
        1==o?n("front"):2==o?n("back"):3==o?n("right"):4==o?n("left"):5==o?n("top"):6==o&&n("bottom"),(s=$("#dice__audio")[0]).pause(),s.currentTime=0,s.play()})});
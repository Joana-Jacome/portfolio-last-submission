//the function below controls when the text in the banner shows and disappears and also when the user scrolls up and down


$(document).ready(function() {
    $('.my-name').hide().fadeIn(800);
    $('.my-title').hide().delay(850).fadeIn(900);
});

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('.my-name').hide().fadeIn(900);
        $('.my-title').hide().delay(950).fadeIn(980);
    }

});

$(document).ready(function(){
    $('.html').animate({width: '55%'}, 7000, 'linear');  
    $('.css').animate({width: "45%"},7000, "linear"); 
    $('.javascript').animate({width: "35%"},7000, "linear");
    $('.react').animate({width: "30%"},7000, "linear");
    $('.jQuery').animate({width: "35%"}, 7000, "linear");
    $('.PHP').animate({width: "35%"},7000,"linear");

});  

       
$(document).ready(function(){
    $('#my-button').click(function(event){
    $('.html').animate({width: '55%'}, 7000, 'linear');  
    $('.css').animate({width: "45%"},7000, "linear"); 
    $('.javascript').animate({width: "35%"},7000, "linear");
    $('.react').animate({width: "30%"},7000, "linear");
    $('.jQuery').animate({width: "35%"}, 7000, "linear");
    $('.PHP').animate({width: "35%"},7000,"linear");
    
});
});



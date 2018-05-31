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


  $(function(){
    let oldtext;    
    $('.card-text').hover(function(){
    oldtext = $(this).text();
        $(this).text("Above all you want something you are proud of. That's always been my philosophy of business.");
    }, function(){
        $(this).text(oldtext)
    });
  })

   

       
$(document).ready(function(){
    $('.html').animate({width: '65%'}, 4000, 'linear');  
    $('.css').animate({width: "60%"},4500, "linear"); 
    $('.javascript').animate({width: "55%"},5000, "linear");
    $('.react').animate({width: "53%"},5500, "linear");
    $('.jQuery').animate({width: "55%"}, 5000, "linear");
    $('.PHP').animate({width: "55%"},5000,"linear");
    });
    










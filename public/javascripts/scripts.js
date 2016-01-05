//Navbar Collapse
$('.navbar-collapse a').click(function () {
    $('.navbar-collapse').collapse('hide');
});

//Smooth Scroll to Div
$('a[href*=#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top-50 }, 650);
});

//Close Tip effect
$('#close-tip').on('click',function(){
	$('#tips').hide(1500);
});
//Random Tip
var rand,ln,temp,tips;
var displayTip=$('#display-tip');
$('#refresh-tip').on('click',function(){
    rand=(rand+1)%ln;
    displayTip.fadeOut(700,function(){
        displayTip.html(tips[rand]);
        displayTip.fadeIn(700);
    });
});
//After Page Loaded
$('document').ready(function(){
	//Logo Animation
	$('.hidden-logo-line').fadeIn(2500);
    $('.hidden-tag-line').slideDown(2500);
    //Load Tips
    $.getJSON('data/tipsFeed.json',function(res,status){
    	ln=res.length;
    	rand=Math.floor(Math.random()*(ln))
    	tips=res;
		$('#display-tip').html(tips[rand]);
	});
});

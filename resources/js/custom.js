
var slideCount = $('#showcase ul li').size();
	var slideWidth = $('#showcase ul li').width();
	var slideHeight = $('#showcase ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	var curslide = 1;
	
	function updateshowcase(){
		
	slideCount = $('#showcase ul li').size();
	slideWidth = $('#showcase ul li').width();
	slideHeight = $('#showcase ul li').height();
	sliderUlWidth = slideCount * slideWidth;
	
	var curposition = (curslide - 1) * slideWidth;
	$('#showcase ul').css({ width: sliderUlWidth, left: curposition});
	
		
	}
	
	
	
	
	$(window).resize(function(){
		
	slideCount = $('#showcase ul li').size();
	slideWidth = $('#showcase ul li').width();
	slideHeight = $('#showcase ul li').height();
	sliderUlWidth = slideCount * slideWidth;
	curslide = 1;
	$('#showcase ul').css({ width: sliderUlWidth, left: 0});
		
		});
	

$(document).ready(function(){

$("#top").toggleClass("darken");
$('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});
$("#gallery").click(function(e){
	e.preventDefault();
	
    $('html,body').animate({scrollTop:$("#top").offset().top}, 500);
	$("#topcontent").toggle();
	$("#topcssbackgroundslider").toggleClass("blur");
	$("#top").toggleClass("darken");
});
$("#aboutbutton").click(function(e){
	e.preventDefault();
	
    $('html,body').animate({scrollTop:$("#top").offset().top}, 500);
	$("#topcontent").show();
	$("#topcssbackgroundslider").addClass("blur");
	$("#top").addClass("darken");
});



	
	
	
	
	
	updateshowcase();

	
	$('#showcase ul').css({ width: sliderUlWidth, left: 0});

    function moveLeft() {
	    if(curslide>1){
        $('#showcase ul').animate({
            left: '+='+slideWidth
        }, 200, function () {
        });
        curslide = curslide - 1;
        }
    };

    function moveRight() {
	    if(curslide<slideCount){
        $('#showcase ul').animate({
            left: '-='+slideWidth
        }, 200, function () {
        });
        curslide = curslide + 1;
        }
    };

    $('#previousitem').click(function () {
        moveLeft();
    });

    $('#nextitem').click(function () {
        moveRight();
    });


});
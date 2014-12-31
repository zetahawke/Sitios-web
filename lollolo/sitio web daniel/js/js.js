
$(function() {
	Grid.init();
});

$(function() {
	Gridelites.init();
});

$(function() {
	Gridgold.init();
});

$(function() {
	Gridvip.init();
	
});

$('.anclas').click(function(e){
	e.preventDefault();
	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});

var color = $('button > .anclas').hover((function(e){
	e.preventDefault();
	this.css('color', '#fff');
}),(function(e){
	e.preventDefault();
	this.css('color', '#969696');
}) );

 $(document).ready(function() {
  var menu = $('#header');
  var contenedor = $('#cont-header');
  var cont_offset = contenedor.offset();
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.

  $(window).on('scroll', function() {
	 //alert($(window).scrollTop());
	if($(window).scrollTop() > cont_offset.top) {
	  menu.addClass('menu-fijo');
	  $("#destacadas").css("margin-top","80px");
	} else {
	  menu.removeClass('menu-fijo');
	  $("#destacadas").css("margin-top","0px");
	}
  });
  
  
  var menu2 = $('#buscador');
  var contenedor2 = $('#todo-busqueda');
  var cont_offset2 = contenedor2.offset();
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.

  $(window).on('scroll', function() {
	 //alert($(window).scrollTop());
	if($(window).scrollTop() > cont_offset2.top) {
	  menu2.addClass('buscador-fixed');
	} else {
	  menu2.removeClass('buscador-fixed');
	}
  });
  
  
  
  $("#btn-buscador").click(function(){
	  $("#btn-buscador").animate({marginLeft: "150"},500,function(){
			$("#cont-busqueda").css("margin-top","-1000px").css("display","block").animate({marginTop: "-45"},500);
		  });
	  
	  });
	  
  $("#img-close-busqueda").click(function(){
	  $("#cont-busqueda").animate({marginTop: "-1000"},500,function(){
			  $("#btn-buscador").animate({marginLeft: "58"},500);
			  $("#cont-busqueda").css("display","none");
		  });
	  
	  
	  });
  
  $("#btn-postula").click(function(){
		if($("#postula").css("display") == "block"){
				$(".transparente").stop().slideUp(300 , function(){
						$(".transparente").css("display","none");
					});
				$("#postula").stop().slideUp(300, function(){
						$("#inicia").css("display","none");
						$("#recupera").css("display","none");
						$("#registrates").css("display","none");
						$("#reclamos").css("display","none");
						$("#postula-reclamos").stop().css("display","none");
					});
			}
		else{
				$("#postula-reclamos").stop(true, true).slideDown(0 , function(){
						$(".transparente").stop(false, true).slideDown(300);
						$("#postula").stop(false, true).slideDown(300);
						$("#reclamos").stop(false, true).css("display","none");
						$("#recupera").stop(false, true).css("display","none");
						$("#inicia").stop(false, true).css("display","none");
						$("#registrates").stop(false, true).css("display","none");
					});
				
				
			}
	  
		if($(window).scrollTop() < cont_offset.top){
				//$(window).animate(scrollTo(0 , (cont_offset.top + 2)), 3000);
				//$(window).scrollTop(cont_offset.top + 2);
				$('html, body').stop().animate({scrollTop: cont_offset.top + 2}, 200);
			}
	  });
	  
	$("#btn-reclamos").click(function(){
		
		if($("#reclamos").css("display") == "block"){
				$(".transparente").stop().slideUp(300 , function(){
						$(".transparente").css("display","none");
					});
				$("#reclamos").stop().slideUp(300, function(){
						$("#postula").css("display","none");
						$("#inicia").css("display","none");
						$("#registrates").css("display","none");
						$("#recupera").css("display","none");
						$("#postula-reclamos").stop().css("display","none");
					});
			}
		else{
				$("#postula-reclamos").stop(true, true).slideDown(0,function(){
					
						$(".transparente").stop(false, true).slideDown(300);
						$("#reclamos").stop(false, true).slideDown(300);
						$("#postula").stop(false, true).css("display","none");
						$("#recupera").stop(false, true).css("display","none");
						$("#inicia").stop(false, true).css("display","none");
						$("#registrates").stop(false, true).css("display","none");
					});
				
				
			}
		
		if($(window).scrollTop() < cont_offset.top){
				//$(window).animate(scrollTo(0 , (cont_offset.top + 2)), 3000);
				//$(window).scrollTop(cont_offset.top + 2);
				$('html, body').stop().animate({scrollTop: cont_offset.top + 2}, 200);
			}
		
		
	  });
  

	$("#btn-inicia").click(function(){
		
		if($("#inicia").css("display") == "block"){
				$(".transparente").stop().slideUp(300 , function(){
						$(".transparente").css("display","none");
					});
				$("#inicia").stop().slideUp(300, function(){
						$("#postula").css("display","none");
						$("#recupera").css("display","none");
						$("#registrates").css("display","none");
						$("#reclamos").css("display","none");
						$("#postula-reclamos").stop().css("display","none");
					});
			}
		else{
				$("#postula-reclamos").stop(true, true).slideDown(0,function(){
					
						$(".transparente").stop(false, true).slideDown(300);
						$("#inicia").stop(false, true).slideDown(300);
						$("#postula").stop(false, true).css("display","none");
						$("#recupera").stop(false, true).css("display","none");
						$("#reclamos").stop(false, true).css("display","none");
						$("#registrates").stop(false, true).css("display","none");
					});
				
				
			}
		
		if($(window).scrollTop() < cont_offset.top){
				//$(window).animate(scrollTo(0 , (cont_offset.top + 2)), 3000);
				//$(window).scrollTop(cont_offset.top + 2);
				$('html, body').stop().animate({scrollTop: cont_offset.top + 2}, 200);
			}
		
		
	  });
	
	
	
	$("#recupera-cont").click(function(){
		
		if($("#recupera").css("display") == "block"){
				$(".transparente").stop().slideUp(300 , function(){
						$(".transparente").css("display","none");
					});
				$("#recupera").stop().slideUp(300, function(){
						$("#postula").css("display","none");
						$("#inicia").css("display","none");
						$("#registrates").css("display","none");
						$("#reclamos").css("display","none");
						$("#postula-reclamos").stop().css("display","none");
					});
			}
		else{
				$("#postula-reclamos").stop(true, true).slideDown(0,function(){
					
						$(".transparente").stop(false, true).slideDown(300);
						$("#recupera").stop(false, true).slideDown(300);
						$("#postula").stop(false, true).css("display","none");
						$("#inicia").stop(false, true).css("display","none");
						$("#reclamos").stop(false, true).css("display","none");
						$("#registrates").stop(false, true).css("display","none");
					});
				
				
			}
		
		if($(window).scrollTop() < cont_offset.top){
				//$(window).animate(scrollTo(0 , (cont_offset.top + 2)), 3000);
				//$(window).scrollTop(cont_offset.top + 2);
				$('html, body').stop().animate({scrollTop: cont_offset.top + 2}, 200);
			}
		
		
	  });
	
	
	$("#btn-registrate").click(function(){
		
		if($("#registrates").css("display") == "block"){
				$(".transparente").stop().slideUp(300 , function(){
						$(".transparente").css("display","none");
					});
				$("#registrates").stop().slideUp(300, function(){
						$("#postula").css("display","none");
						$("#inicia").css("display","none");
						$("#recupera").css("display","none");
						$("#reclamos").css("display","none");
						$("#postula-reclamos").stop().css("display","none");
					});
			}
		else{
				$("#postula-reclamos").stop(true, true).slideDown(0,function(){
					
						$(".transparente").stop(false, true).slideDown(300);
						$("#registrates").stop(false, true).slideDown(300);
						$("#postula").stop(false, true).css("display","none");
						$("#inicia").stop(false, true).css("display","none");
						$("#reclamos").stop(false, true).css("display","none");
						$("#recupera").stop(false, true).css("display","none");
					});
				
				
			}
		
		if($(window).scrollTop() < cont_offset.top){
				//$(window).animate(scrollTo(0 , (cont_offset.top + 2)), 3000);
				//$(window).scrollTop(cont_offset.top + 2);
				$('html, body').stop().animate({scrollTop: cont_offset.top + 2}, 200);
			}
		
		
	  });
	
	
	
	
	
  
		$(window).on('scroll', function(){
			
				setTimeout(function(){
					
						if($(window).scrollTop() < cont_offset.top){
						if($("#postula-reclamos").css("display") == "block"){
								$(".transparente").slideUp(100);
								$("#reclamos").slideUp(100);
								$("#postula").slideUp(100, function(){
										$(".transparente").css("display","none");
										$("#postula").css("display","none");
										$("#reclamos").css("display","none");
										$("#inicia").css("display","none");
										$("#registrate").css("display","none");
										$("#recupera").css("display","none");
										$("#postula-reclamos").css("display","none");
									});
							}
						
						}
					},300);
				
			});
		
		
  		
});
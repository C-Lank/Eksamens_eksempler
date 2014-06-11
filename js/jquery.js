$(document).ready(function(){
	$('#maincontent').load($('.menuitem:first').attr('href'));

	$('.menuitem:first').addClass('active');
});

$('.menuitem').click(function(){
	$('.menuitem').removeClass('active')
	$(this).addClass('active');
});

$('.menuitem').click(function(){
	var href = $(this).attr('href');
	$('#maincontent').hide().load(href).show();
	
	//stops page reload
	return false;
});


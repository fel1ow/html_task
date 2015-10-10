$( document ).ready(function()
{


	$('.header_list_item').hover(function()
	{
		$(this).find('.header_dropdown_list').show();
	},
	function()
	{
		$(this).find('.header_dropdown_list').hide();
	});


	$('.show_modal').click(function()
	{
		$('.modal_like').animate({ opacity:1, left:"0" }, 500);
		$('.modal_fade').removeClass('hide');
	});


	$('.modal_like_yes').click(function()
	{
		$('.modal_like').animate({
            opacity: 0,
            left: '-135%'
            }, 500, function() {
                $('.modal_fade').addClass('hide');
		});
	});

	
});
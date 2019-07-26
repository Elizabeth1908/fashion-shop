$('.tab__container .tab').click(function () {

	var target = $(this).attr('data-tab');

	$('.tab__container .tab').removeClass('active');
	$(this).addClass('active');

	$('.tab__container .content').removeClass('active');
	$('.tab__container .content' + target).addClass('active');

});


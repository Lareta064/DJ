$(document).ready(function() {

	/*$("a,nav a,a[href='#'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
	highlightSelector:"nav a"
	});*/

	$('.timeline-item-link').on('click', function(e){
		e.preventDefault();
		$(this).siblings('.timeline-item-description').css('display','block');
		$(this).parent('.timeline-item').siblings('.timeline-item').children('.timeline-item-description').css('display','none');
	});
})
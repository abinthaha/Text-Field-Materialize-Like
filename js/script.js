$(document).ready(function () {
	
	// for (var i = 0; i < 50; i++) {
	// 	$('#balls_container').append("<li></li>");
	// }

	

	// /*To move the balls randomly**/

	// setInterval(function() {
	// 	for (var i = 0; i < 51; i++) {
	// 		var x_pos = Math.floor((Math.random() * 500) + 1),
	// 			y_pos = Math.floor((Math.random() * 500) + 1);

	// 		$('#balls_container li:nth-child('+i+')').css('transition', 'all 1s ease');
	// 		$('#balls_container li:nth-child('+i+')').css('transform', 'translate('+x_pos+'px, '+y_pos+'px)');
	// 	}
	// }, 1000);
	var mouse;
	$(document).bind('mousemove', function(e) {
		mouse = {'x': e.pageX, 'y': e.pageY};
        $('#mouse_div').css('left', e.pageX-50);
        $('#mouse_div').css('top', e.pageY-50);

    });
    setInterval(function() {
    	var x_pos = $('#bubble').offset().left,
    		y_pos = $('#bubble').offset().top;

    	// $('#bubble').css('left', x_pos+10);
    	$('#bubble').css('top', y_pos+50);
    	// $('#bubble').css('transform', 'translate('+x_pos+'px, '+(y_pos+10)+'px)');
    }, 500);
    var timer = 0;
    $(document).on('mousedown', function() {
    	var x_pos = $('#bubble').offset().left,
    		y_pos = $('#bubble').offset().top,
    		x_diff = mouse.x - x_pos,
    		y_diff = mouse.y - y_pos;
    	// if(mouse.x)

    	$('#bubble').css('transform', 'translate('+x_diff+'px, '+(y_pos-100)+'px)');
    });
    $(document).on('mouseup', function() {
    	timer = 0;
    	console.log(timer);
    })
});
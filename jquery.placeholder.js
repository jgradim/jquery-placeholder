/*
 * jquery-placeholder 1.1 - minimalistic jQuery plugin to add a placeholder text to a text field
 * 
 * http://github.com/jgradim/jquery-placeholder/
 *
 * Copyright (c) 2009 João Gradim
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($){
	
	// function definition
	$.fn.placeholder = function(opts) {
		var o = $.extend({}, $.fn.placeholder.defaults, opts);
		
		return this.each(function() {
			var obj = $(this);
			
			// define handlers to add/remove placeholder text
			obj.focus(function() {
				obj.removeClass(o.cls);
				if(obj.val() == o.text){
					obj.val('');
				}
			}).blur(function() {
				if(obj.val() == '') {
					obj.addClass(o.cls).val(o.text);
				}
			});
			
			// apply class and text to placeholder elements
			obj.blur();
			
			obj.parents('form:first').submit(function() {
				if(o.clearOnSubmit && obj.val() == o.text) {
					obj.val('');
				}
			});
		});
	};
	
	// default options
	$.fn.placeholder.defaults = {
		text: "enter text",
		cls: 'placeholder',
		clearOnSubmit: true
	};
})(jQuery);

(function ( $ ) {
	$.fn.setText(thisText) = function() {
		return this.each(function(){
			var $thisField = $(this);
			if ($thisField.is("input")) {
				$thisField.val(thisText);
			} else {
				$thisField.text(thisText);
			}	
		});
	}
}( jQuery ));

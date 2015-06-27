(function ( $ ) {
	$.fn.setText(thisText) = function() {
		var thisInput = this;
		if (thisInput.is("input")) {
			thisInput.val(thisText);
		} else {
			thisInput.text(thisText);
		}
		return thisInput;
	}
}( jQuery ));

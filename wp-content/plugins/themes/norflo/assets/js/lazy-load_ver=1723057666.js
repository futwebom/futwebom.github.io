jQuery(function ($) {
    'use strict';
	
	jQuery(document).on('ready', function () { 

		// ScrollCue JS
		scrollCue.init();

	});

	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) { 

			// ScrollCue JS
    		scrollCue.init();

		});
    });

}(jQuery));

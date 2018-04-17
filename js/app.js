$(document).ready(function() {

// Page Piling Initialize

	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'horizontal',
        horizontalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 100,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'bottom-center',
            'tooltips': ['section1', 'section2', 'section3']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 2,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        });


// Menu Toggling

        $('.burger, .overlay').click(function(){
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('nav').toggleClass('show');
        $('body').toggleClass('overflow');
        });


// iZiModals


//IZI Modal [START]
        $("#page1-expand").iziModal({
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)'

});


});

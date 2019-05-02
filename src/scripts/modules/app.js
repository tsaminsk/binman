window.onload = function () {

    $('.js-arrow').on('click', function (event) {
        event.preventDefault();
        $(this).parents('.js-item').find('.js-info').slideToggle(500);

        if ( $(this).css("transform") == "matrix(1, 0, 0, -1, 0, 0)" ) {
            $(this).css("transform", "matrix(1, 0, 0, 1, 0, 0)");
            closeInfo(500);         
        }
        else if ( $(this).css("transform") == "matrix(1, 0, 0, 1, 0, 0)" || $(this).css("transform") == "none" ) {            
            $(this).css("transform", "matrix(1, 0, 0, -1, 0, 0)");
            $('.js-item').addClass('not-active is-opacity');
            $(this).parents('.js-item').removeClass('not-active is-opacity');
            
            let that = this;
            $(this).parents('.js-item').find('.js-info').find('.js-close-item').off('click').on('click', function (event) {
                event.preventDefault();
                $(that).css("transform", "matrix(1, 0, 0, 1, 0, 0)");
                $(this).parents('.js-info').slideUp(500);
                closeInfo(500);
            });
        }
    });
};

function closeInfo(time) {
    $('.js-item').removeClass('is-opacity');
    setTimeout(() => {
        $('.js-item').removeClass('not-active');
    }, time); 
}
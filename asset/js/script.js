$(document).ready(function() {
    var $ttlWrap = $('.ttl-wrap');
    var $mainView = $('.main-view');

    function updateTitlePosition() {
        var windowHeight = $(window).height();
        var mainViewHeight = $mainView.outerHeight();

        if(mainViewHeight < windowHeight){
            // ファーストビュー内で中央
            $ttlWrap.css({
                'align-items': 'center', 
                'justify-content': 'center'
            });
        } else {
            // ウィンドウ中央に
            var topOffset = (windowHeight - $ttlWrap.outerHeight()) / 2;
            $ttlWrap.css({
                'align-items': 'flex-start',
                'justify-content': 'center',
                'margin-top': topOffset + 'px'
            });
        }
    }

    updateTitlePosition();
    $(window).resize(updateTitlePosition);
});

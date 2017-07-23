(function (options) {
    'use strict';

    iFrameResize({
        checkOrigin: false
    });

    function scrollIframe (scroll) {
        var iframe = document.querySelector(options.iframeSel),
            innerDoc = iframe.contentDocument || iframe.contentWindow.document,
            header = document.querySelector(options.iframeHdr),
            leftNav = document.querySelector(options.iframeLeftNav),
            hdrHgt = header.clientHeight;

        //header.style.top = + 'px';
        leftNav.style.top = scroll + 'px'
    }

    function iframeReady () {
        window.addEventListener('scroll', function() {
            var scroll = window.pageYOffset || 
                            document.documentElement.scrollTop || 
                            document.body.scrollTop ||
                            0;

            console.log('scroll', scroll);

            scrollIframe(scroll);
        });     
    }

    setTimeout(iframeReady, 500);
}(
    {
        iframeSel: '#myIframe',
        iframeHdr: '.iframe .header',
        iframeLeftNav: '.iframe .left-nav'
    }
));
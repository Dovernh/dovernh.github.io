(function () {
    'use strict';

    iFrameResize({
        checkOrigin: false
    });

    setTimeout(function(){
        window.addEventListener('scroll', function() {
            var iframe = document.getElementById('myIframe'),
                innerDoc = iframe.contentDocument || iframe.contentWindow.document,
                header = innerDoc.getElementsByClassName('header'),
                leftNav = innerDoc.getElementsByClassName('.left-nav'),
                hdrHgt = header.clientHeight;
            
            window.addEventListener('scroll', function(){
                var scroll = window.pageYOffset || 
                             document.documentElement.scrollTop || 
                             document.body.scrollTop ||
                             0;

                //header.style.top = + 'px';
                //leftNav.style.top = + 'px'
            })
        });
    }, 500);
}())
/*jslint node: false, regexp: true, plusplus: true */

var ci, likes;
ci = document.getElementById('contactImage');
likes = document.getElementsByClassName('likeImg');

function resize() {
    'use strict';
    var ww, hh, i, ciWidth, ciHeight, likeSize;
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    
    if ((ww >= 1024) && (hh >= 768)) {
        
        // Page is huge. Don't constrain
        ciWidth = '1024px';
        ciHeight = '500px';
        likeSize = '200px';
        
    } else {
        
        // The page has been formatted to fit in 1024x768, a 4:3 ratio.
        if ((hh / 3) >= (ww / 4)) {

            // Page is contrained by width, not height
            ciWidth = Math.ceil(1024 * ww / 1024) + 'px';
            ciHeight = Math.ceil(500 * ww / 1024) + 'px';
            likeSize = Math.ceil(200 * ww / 1024) + 'px';
        
        } else {
        
            // Page is contrsained by height, not width.
            ciWidth = Math.ceil(1024 * hh / 768) + 'px';
            ciHeight = Math.ceil(500 * hh / 768) + 'px';
            likeSize = Math.ceil(200 * hh / 768) + 'px';
            
        }
        
    }
    
    // Actually process the width/height changes
    ci.style.width = ciWidth;
    ci.style.height = ciHeight;
    for (i = 0; i < likes.length; i++) {
        likes[i].style.width = likeSize;
        likes[i].style.height = likeSize;
    }
}

window.onresize = function () {
    'use strict';
    resize();
};

resize();
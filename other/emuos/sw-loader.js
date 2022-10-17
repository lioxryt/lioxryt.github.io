// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}
(function() {

    var cnt = 0;
    // Prompt to install PWA
    window.onbeforeinstallprompt = function(e) {
        cnt += 1;
        if (cnt > 2) {
            return;
        }
        console.log('Before install prompt', e);
        e.preventDefault();
        var deferredPrompt = e;
        window.onclick = function(e) {
            deferredPrompt.prompt();
            window.onclick = null;
        }
    };
})();

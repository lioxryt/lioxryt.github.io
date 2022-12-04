var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-98DP5VKS42");
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-98DP5VKS42');`;
  document.head.append(gascript, inlinegascript);
  script("Injected script 1/5");
}

const tabCloak = document.createElement("script");
tabCloak.setAttribute("src", "/js/tab_cloak.js");
document.head.append(tabCloak);
script("Injected script 2/5");

const arc = document.createElement("script");
arc.setAttribute("async", "");
arc.setAttribute("src", "https://arc.io/widget.min.js#eRPHFgiC");
document.head.append(arc);
script("Injected script 3/5");

const adblock = document.createElement("script");
adblock.setAttribute("src", "https://fundingchoicesmessages.google.com/i/pub-5756835229788588?ers=1");
adblock.setAttribute("nonce", "yibq-w_TR5NOCRWsU-VL0Q");
adblock.setAttribute("async", "");
document.head.append(adblock);
script("Injected script 4/5");

const ad = document.createElement("script");
ad.setAttribute("async", "");
ad.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588");
ad.setAttribute("crossorigin", "anonymous");
document.head.append(ad);
script("Injected script 3/5");
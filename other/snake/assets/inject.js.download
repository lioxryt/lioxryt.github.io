(function() {
  if (window.top === window.self) {
    const tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = Math.random() * 16;
    console.log('Top level document: ' + window.location.href);

    const saReport = function () {
      const a = document.createElement('A');
      a.href = window.location.href;

      const xhr = new XMLHttpRequest();
      const body = {
        url: sessionStorage[tabId + '-href'],
        tabId: tabId
      };
      xhr.open('POST', document.location.origin + '/93791460bd4591916fae6788dd691570096e47a0e47061cdead407edc2363560/log', true);
      xhr.send(JSON.stringify(body));

    };

    const saTicker = function () {
      setTimeout(() => {
        if (parent.document.URL !== sessionStorage[tabId + '-href']) {
          sessionStorage[tabId + '-href'] = parent.document.URL;
          console.log('LS: Ticker: ' + sessionStorage[tabId + '-href'] + ', ' + window.location.href);
          saReport();
        }
        saTicker();
      }, 1000);
    };

    if (window.location.href.match(/(^|\.)youtube\./)) {
      const style = document.createElement('STYLE');
      const params = undefined;
      const flaggedTerms = undefined;
      let killYTAutoplayInt;
      let hideYTAvatarInt;
      const a = document.createElement('A');
      a.href = window.location.href;

      console.log('YouTube injection');

      const applyYouTube = function () {
        const xhr = new XMLHttpRequest();
        const body = {
          code: 'settings',
          url: window.location.href
        };
        xhr.open('POST', document.location.origin + '/93791460bd4591916fae6788dd691570096e47a0e47061cdead407edc2363560/ytconf', true);
        xhr.send(JSON.stringify(body));

        xhr.onreadystatechange = function () {
          if (this.status === 200 && xhr.responseText) {
            console.log('Applying YouTube settings...');
            const ytSettings = JSON.parse(xhr.responseText);
            console.log(JSON.stringify(ytSettings));
            if (ytSettings.score && ytSettings.score.blocked) {
              window.location.href = ytSettings.score.redirect;
            } else {
              configureYoutube(ytSettings);
            }
          }
        };
      };

      const configureYoutube = function (ytSettings) {
        if (typeof(ytSettings) === 'undefined') {
          return;
        }
      
        style.type = 'text/css';
        style.innerText = '';
        if (ytSettings.youtube_hide_sidebar) {
          style.innerText += '.watch-sidebar, .ytd-watch-next-secondary-results-renderer {display: none !important;}\n';
        }
        if (ytSettings.youtube_hide_comments) {
          style.innerText += '#watch-discussion, .watch-discussion, ytd-comments {display: none !important;}\n';
        }
        if (typeof(killYTAutoplayInt) !== 'undefined') {
          clearInterval(killYTAutoplayInt);
          killYTAutoplayInt = undefined;
        }
        if (ytSettings.youtube_prevent_channel_autoplay) {
          killYTAutoplayInt = setInterval(killYTAutoplay, 1000);
        }
        if (typeof(hideYTAvatarInt) !== 'undefined') {
          clearInterval(hideYTAvatarInt);
          hideYTAvatarInt = undefined;
        }

        if (ytSettings.youtube_hide_thumbnails) {
          hideYTAvatars();
          hideYTAvatarInt = setInterval(hideYTAvatars, 1000);
        }
        if (style.innerText !== '') {
          let head = document.getElementsByTagName('head');
          if (head && head.length > 0) {
            head = head[0];
            head.append(style);
          }
        }
      };

      const blockYTImg = '/93791460bd4591916fae6788dd691570096e47a0e47061cdead407edc2363560/blocked-yt-image.png';
      function hideYTAvatars() {
        const a = [...document.querySelectorAll('#avatar')];
        a.forEach((t) => {
          [...t.getElementsByTagName('img')].forEach((i) => {
            if (i.src !== blockYTImg) {
              i.src = blockYTImg;
            }
          });
        });
      };

      function killYTAutoplay () {
        let ul, playerById, players;
        // Make sure our anchor has the latest
        a.href = window.location.href;
        if (a.hostname.match(/(^|\.)youtube\./)) {
          if (
            a.pathname.match(/^\/user\/[^\/\?]+$/)
            ||
            a.pathname.match(/^\/channel\/[^\/\?]+$/)
            ||
            a.pathname.match(/\/featured$/)
          ) {
            ul = document.getElementById('browse-items-primary');
            playerById = document.getElementById('player-container');
            if (playerById !== null && typeof(playerById) !== 'undefined') {
              playerById.parentElement.style.visibility = 'hidden';
            }
            if (ul !== null && typeof(ul) !== 'undefined') {
              players = ul.getElementsByClassName('video-player-view-component');
              if (typeof(players[0]) !== 'undefined') {
                players[0].style.visibility = 'hidden';
              }
            }
            const html5player = document.getElementById('c4-player');
            if (html5player !== null && typeof(html5player) !== 'undefined') {
              const actualCode = '(' + function () {
                document.getElementById('c4-player').pauseVideo();
                ul = document.getElementById('browse-items-primary');
                playerById = document.getElementById('player-container');
                if (playerById !== null && typeof(playerById) !== 'undefined') {
                //playerById.parentElement.remove();
                }
                if (ul !== null && typeof(ul) !== 'undefined') {
                  players = ul.getElementsByClassName('video-player-view-component');
                  if (players[0] !== null && typeof(players[0]) !== 'undefined') {
                  //players[0].remove();
                  }
                }
              } + ')();';
              const script = document.createElement('script');
              script.textContent = actualCode;
              (document.head || document.documentElement).appendChild(script);
              script.remove();
            }
          }
        }
      };

      let path;
      function watchDog() {
        if (path !== window.location.href) {
          applyYouTube();
          path = window.location.href;
        }
        if (!style.parentElement) {
          let head = document.getElementsByTagName('head');
          if (head && head.length > 0) {
            head = head[0];
            head.append(style);
          }
        }
      }
      setInterval(watchDog, 1000);
      watchDog();
    };


    saTicker();
  }
}).call(this);
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const a = document.createElement('A');
a.href = window.location.href;
const FlagEngine = require('./in_page/in_page_flags');

const setupFlagScanning = function(terms, ignoredSites) {
  if (window.relay_log === 'debug') { console.debug('[setupFlagScanning]');}
  if (!Array.isArray(ignoredSites)) { ignoredSites = [];}
  if (terms && terms.length > 0) {
    if (window.relay_log === 'debug') { console.debug('[setupFlagScanning] terms found, starting scanning engine.'); }
    let scanInterval;
    const flagger = new FlagEngine(a);
    flagger.Initialize(terms, ignoredSites).then(() => {
      if (typeof(scanInterval) !== 'undefined') {
        clearInterval(scanInterval);
      }
      const scanAndReport = () => {
        if (window.relay_log === 'debug') { console.debug('[scanAndReport]'); }
        try {
          // Make sure we are up to date on our url
          if (window.location.href !== a.href) {
            if (window.relay_log === 'debug') { console.debug('[scanAndReport] location changed, treating as a new page'); }
            a.href = window.location.href;
          }
          const flags = flagger.Scan();
          if (Array.isArray(flags) && flags.length > 0) {
            if (window.relay_log === 'debug') { console.debug('[scanAndReport] flags found, reporting them: ', flags); }
            flagger.Report(flags);
          }
        } catch (e) {
          console.error(e);
        }
      };
      scanInterval = setInterval(scanAndReport, 5000);
      scanAndReport();
    }).catch(console.error);
  }
};
setupFlagScanning([], ["localhost"]);

},{"./in_page/in_page_flags":5}],2:[function(require,module,exports){
class FacebookFlags {
  constructor(urlObject) {
    if (typeof(urlObject) === 'undefined') { throw new Error('URL OBject required');}
    this.disabled = true;
    this.moduleName = 'facebook';
    if (urlObject.hostname.match(/\.?facebook\.com$/i)) {
      this.disabled = false;
    }
  }

  GatherIntent() {
    if (this.disabled) { return;}
    const ret = [];
    const elements = document.querySelectorAll('[data-text="true"]');
    elements.forEach((e) => {
      ret.push(e.innerText);
    });
    return ret;
  }
}

module.exports = FacebookFlags;

},{}],3:[function(require,module,exports){
class GmailFlags {
  constructor(urlObject) {
    if (typeof(urlObject) === 'undefined') { throw new Error('URL OBject required');}
    this.disabled = true;
    this.moduleName = 'gmail';
    if (urlObject.hostname.match(/mail\.google\.com$/i)) {
      this.disabled = false;
    }
  }

  GatherIntent() {
    if (this.disabled) { return;}
    const ret = [];
    const elements = document.querySelectorAll('[role="textbox"]');
    elements.forEach((e) => {
      ret.push(e.innerText);
    });
    return ret;
  }
}

module.exports = GmailFlags;

},{}],4:[function(require,module,exports){
class GoogleDoc {
  constructor(urlObject) {
    if (typeof(urlObject) === 'undefined') { throw new Error('URL OBject required');}
    this.disabled = true;
    this.moduleName = 'google_doc';
    if (urlObject.hostname.match(/docs\.google\.com$/i)) {
      this.disabled = false;
    }
  }

  GatherIntent() {
    if (this.disabled) { return;}
    const ret = [document.body.innerText];
    return ret;
  }
}

module.exports = GoogleDoc;

},{}],5:[function(require,module,exports){
const supportedDOMEvents = ['change', 'keyup'];
const FB = require('./facebook_flags');
const Twitter = require('./twitter_flags');
const Gmail = require('./gmail_flags');
const GoogleDoc = require('./google_doc_flags');
const MSOffice = require('./ms_office_flags');
class Flags {
  constructor(urlObject) {
    if (typeof(urlObject) === 'undefined') {
      throw new Error('url object required');
    }
    this.UrlObject = urlObject;
    this.terms = [];
    this.lastBodyText = '';
    this.target = {};
    this.initialized = false;
    this.reportedTerms = {};
    this.modules = [];
    const fbModule = new FB(urlObject);
    if (!fbModule.disabled) {
      this.modules.push(fbModule);
    }
    const twitterModule = new Twitter(urlObject);
    if (!twitterModule.disabled) {
      this.modules.push(twitterModule);
    }
    const gmailModule = new Gmail(urlObject);
    if (!gmailModule.disabled) {
      this.modules.push(gmailModule);
    }
    const googleDocModule = new GoogleDoc(urlObject);
    if (!googleDocModule.disabled) {
      this.modules.push(googleDocModule);
    }
    const msOfficeModule = new MSOffice(urlObject);
    if (!msOfficeModule.disabled) {
      this.modules.push(msOfficeModule);
    }
  }

  DOMExtractAndScan(event) {
    if (typeof(event.target) === 'undefined') { throw new Error('event has no target');}
    let values;
    let scanType;
    switch (event.type) {
    case 'scan':
      scanType = 'GatherIntent';
      break;
    default:
      scanType = event.target.tagName.toLowerCase();
      break;
    }

    switch (scanType) {
    case 'input':
      let type = event.target.type || 'text';
      type = type.toLowerCase();
      // Dont scan password fields
      if (type === 'password') { break;}
      values = [event.target.value];
      break;
    case 'textarea':
      values = [event.target.value];
      break;
    default:
      values = [];
      this.modules.forEach((module) => {
        if (typeof(module.GatherIntent) === 'function') {
          const intent = module.GatherIntent();
          if (typeof(intent) === 'string') {
            values.push(intent);
          } else if (Array.isArray(intent)) {
            values = values.concat(intent);
          }
        }
      });
      break;
    }
    if (typeof(values) !== 'undefined') {
      values.forEach((value) => {
        if (value === '') {
          this.target.RelayFlaggedTerms = {};
        } else {
          if (typeof(this.target.RelayFlaggedTerms) === 'undefined') {
            this.target.RelayFlaggedTerms = {};
          }
          const flags = this.Scan(value);
          const toReport = [];
          flags.forEach((flag) => {
            const term = flag[0];
            const cnt = flag[1];
            flag[2] = true; // mark it as user entered
            if (typeof(this.target.RelayFlaggedTerms[term]) === 'undefined') {
              this.target.RelayFlaggedTerms[term] = cnt;
              toReport.push(flag);
            } else {
              if (this.target.RelayFlaggedTerms[term] < cnt) {
                // Only report the new difference
                flag[1] = cnt - this.target.RelayFlaggedTerms[term];
                this.target.RelayFlaggedTerms[term] += flag[1];
                toReport.push(flag);
              }
            }
          });
          if (toReport.length > 0) {
            this.Report(toReport);
          }
        }
      });
    }
  }

  HandleDOM_change(event) {
    if (typeof(event) === 'undefined') { throw new Error('event required');}
    if (event.type !== 'change') { throw new Error('event must be a change event');}
    if (typeof(event.target) === 'undefined') { throw new Error('event has no target');}
    if (typeof(event.target.tagName) === 'undefined') { return;}
    if (this.ShouldIgnore()) { return;}
    this.DOMExtractAndScan(event);
  }

  HandleDOM_keyup(event) {
    if (typeof(event) === 'undefined') { throw new Error('event required');}
    if (event.type !== 'keyup') { throw new Error('event must be a keyup event');}
    if (typeof(event.target) === 'undefined') { throw new Error('event has no target');}
    if (typeof(event.target.tagName) === 'undefined') { return;}
    if (this.ShouldIgnore()) { return;}
    this.DOMExtractAndScan(event);
  }

  HandleDOM(event) {
    if (typeof(event) === 'undefined') { throw new Error('event required');}
    if (supportedDOMEvents.indexOf(event.type) === -1) {
      throw new Error(`unsupported event type - ${event.type}`);
    }
    if (typeof(this[`HandleDOM_${event.type}`]) === 'function') {
      this[`HandleDOM_${event.type}`](event);
    }
  };

  BindToDOM() {
    document.addEventListener('change', this.HandleDOM.bind(this));
    document.addEventListener('keyup', this.HandleDOM.bind(this));
    setInterval(() => {
      this.DOMExtractAndScan(new Event('scan'));
    }, 1000);
  }

  Initialize(terms, ignoredSites) {
    if (!Array.isArray(terms)) { throw new Error('terms required');}
    if (!Array.isArray(ignoredSites)) { throw new Error('ignoredSites required');}
    return new Promise((resolve, reject) => {
      this.terms = [];
      terms.forEach((term) => {
        const args = {term: term};
        let regexTerm = term.replace(/[\]{}?^$().*\\+|[]/g, '\\$&');
        regexTerm = regexTerm.replace(/\\\*/g, '.*');
        regexTerm = regexTerm.replace(/\\\?/g, '.');
        args.regex = new RegExp('\\b' + regexTerm + '\\b','gi');
        this.terms.push(args);
      });
      this.ignoredSites = ignoredSites;
      this.initialized = true;
      this.BindToDOM();
      resolve();
    });
  }

  SiteMatchers() {
    if (typeof(this.siteMatchers) !== 'undefined') { return this.siteMatchers;}
    if (!Boolean(this.initialized)) { throw new Error('Initialization required');}
    try {
      this.siteMatchers = [];
      this.ignoredSites.forEach((site) => {
        if (typeof(site) === 'object') {
          if (Boolean(site.r)) {
            this.siteMatchers.push(
              new RegExp(site.url, 'i')
            );
          }
        } else if (typeof(site) === 'string') {
          if (site.match(/^([\w\d-]{1,63}\.)+[\w\d-]{1,63}$/i)) {
            this.siteMatchers.push(site.toLowerCase().split('.'));
          } else {
            let escapedUrl = site.replace(/[\]{}?^$().*\\+|[]/g, '\\$&');
            escapedUrl = escapedUrl.replace(/\\\*/g, '.*');
            this.siteMatchers.push(new RegExp('^' + escapedUrl + '$', 'i'));
          }
        }
      });
    } catch (e) {
      this.siteMatchers = undefined;
      throw e;
    }
    return this.siteMatchers;
  }

  ShouldIgnore() {
    if (!Boolean(this.initialized)) { throw new Error('Initialization required');}
    let ignore = false;
    const parts = this.UrlObject.hostname.toLowerCase().split('.');
    this.SiteMatchers().some((site) => {
      if (Object.prototype.toString.call(site) === '[object Array]') {
        const al = site.length;
        const pl = site.length;
        if (al <= pl) {
          for (let i=0; i<al; i++) {
            if (site[(al-1)-i] !== parts[(pl-1)-i]) {
              return false;
            }
          }
          ignore = true;
          return true;
        }
      } else if (this.UrlObject.href.match(site)) {
        ignore = true;
        return true;
      }
    });
    return ignore;
  }

  Scan(input) {
    const flags = [];
    let currentText = '';
    let customInput = false;
    if (!Boolean(this.initialized)) { throw new Error('Initialization required');}
    if (typeof(input) !== 'undefined' && typeof(input) !== 'string') { throw new Error('string required');}
    if (this.ShouldIgnore()) { return flags;}
    if (typeof(this.reportedTerms[this.UrlObject.href]) === 'undefined') {
      this.reportedTerms[this.UrlObject.href] = {};
    }
    if (typeof(input) === 'undefined') {
      currentText = document.body.innerText;
      // Already scaned this.
      if (currentText === this.lastBodyText) {
        return;
      }
    } else {
      currentText = input;
      customInput = true;
    }

    this.terms.forEach((args) => {
      const hits = currentText.match(args.regex);
      if (hits !== null && typeof(hits) !== 'undefined' && hits.length > 0) {
        if (typeof(this.reportedTerms[this.UrlObject.href][args.term]) === 'undefined') {
          flags.push([args.term, hits.length]);
          this.reportedTerms[this.UrlObject.href][args.term] = hits.length;
        } else if (customInput) {
          flags.push([args.term, hits.length]);
        }
      }
    });
    return flags;
  }

  Report(flags) {
    if (window.relay_log === 'debug') { console.debug('[Flagger.Report]'); }
    if (!Array.isArray(flags)) { throw new Error('flags must be an array');}
    if (flags.length === 0) { return;}
    const xhr = new XMLHttpRequest();
    xhr.open('POST', document.location.origin + '/93791460bd4591916fae6788dd691570096e47a0e47061cdead407edc2363560/log_flag', true);
    if (window.relay_log === 'debug') { console.debug('[Flagger.Report] - sending xhr'); }
    xhr.send(JSON.stringify({
      flags: {
        href: this.UrlObject.href,
        hits: flags
      }
    }));
  }
};
module.exports = Flags;

},{"./facebook_flags":2,"./gmail_flags":3,"./google_doc_flags":4,"./ms_office_flags":6,"./twitter_flags":7}],6:[function(require,module,exports){
class MSOffice {
  constructor(urlObject) {
    if (typeof(urlObject) === 'undefined') { throw new Error('URL OBject required');}
    this.disabled = true;
    this.moduleName = 'ms_office';
    this.hostname = urlObject.hostname.toLowerCase();
    this.disabled = this.setDisabled();
  }

  GatherIntent() {
    if (this.disabled) { return;}
    const ret = [document.body.innerText];
    return ret;
  }

  setDisabled() {
    const hostParts = this.hostname.split('.');
    const len = hostParts.length;
    if (!hostParts[len - 2]) { return true;}
    let domainName = hostParts[len - 2];
    let subDomainName = hostParts[len - 3];
    if (domainName === 'co' && hostParts[len - 1] === 'uk') {
      domainName = hostParts[len - 3];
      subDomainName = hostParts[len-4];
    }

    switch (domainName) {
      case 'live':
      case 'office':
      case 'office365':
        break;
      default:
        return true;
    }
    switch (subDomainName) {
      case 'officeapps':
      case 'outlook':
        return false;
      default:
        return true;
    }
  }
}

module.exports = MSOffice;

},{}],7:[function(require,module,exports){
class Twitter {
  constructor(urlObject) {
    if (typeof(urlObject) === 'undefined') { throw new Error('URL OBject required');}
    this.disabled = true;
    this.moduleName = 'twitter';
    if (urlObject.hostname.match(/\.?twitter\.com$/i)) {
      this.disabled = false;
    }
  }

  GatherIntent() {
    if (this.disabled) { return;}
    const ret = [];
    const elements = document.querySelectorAll('.tweet-box.rich-editor');
    elements.forEach((e) => {
      ret.push(e.innerText);
    });
    return ret;
  }
}

module.exports = Twitter;

},{}]},{},[1]);

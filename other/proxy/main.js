"use strict";

(() => {
// default error handler
window.onerror = (msg, src, lineno, colno, e) => {
	alert(msg, "Error");
};

Array.prototype.remove = function(element) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] == element)
			this.splice(i, 1);
	}
};

function testLocalStorage() {
	try {
		localStorage.setItem("test", "___test");
		if (localStorage.getItem("test") !== "___test")
			throw "Value mismatch";
		localStorage.removeItem("test");
		return true;
	} catch (err) {
		return false;
	}
}

let storage = (() => {
	let base;

	if (testLocalStorage()) {
		let data = localStorage.getItem("data");
		if (data == null)
			data = "{}";

		base = JSON.parse(data);
		base.save = function () {
			localStorage.setItem("data", JSON.stringify(this));
		};

		// autosave
		setInterval(() => {
			base.save();
		}, 10000);
	} else {
		alert("Local storage is disabled by your browser, your browsing data will not be saved.", "Warning");
		base = {
			save: () => {
				// stub
			}
		};
	}

	base.getItem = function (key, def) {
		let item = this[key];
		if (item == null)
			return this[key] = def;
		return item;
	};

	return base;
})();

window.onbeforeunload = window.onunload = () => {
	storage.save();
};

if(!("serviceWorker" in navigator)) {
	// service workers are not supported
	block("Your browser does not support service workers, please use a supported browser to continue.", "Warning");
	return;
}

window.navigator.serviceWorker.register("/sw.js", {
	scope: "/",
	type: "classic",
	updateViaCache: "none"
}).catch((err) => {
	block("Failed to register service worker, please reload this page or try again with a different browser.", "Error")
	console.warn(err);
});

let urlInput = document.getElementById("input");
let shortcutBar = document.getElementById("shortcut-bar");
let addShortcutButton = document.getElementById("add-shortcut");
let contextMenu = document.getElementById("context-menu");
let shortcutContextMenu = document.getElementById("shortcut-context-menu");
let googleSearch = "https://www.google.com/search?q=";
let googleSearchR = "https://www.google.com/search?btnI=Im+Feeling+Lucky&q=";

let shortcuts = storage.getItem("shortcuts", [
	{
		name: "Google",
		icon: "res/google.svg",
		link: "https://www.google.com/"
	},
	{
		name: "YouTube",
		icon: "res/youtube.svg",
		link: "https://www.youtube.com/"
	},
	{
		name: "Facebook",
		icon: "res/facebook.svg",
		link: "https://www.facebook.com"
	},
	{
		name: "Instagram",
		icon: "res/instagram.svg",
		link: "https://www.instagram.com"
	},
	{
		name: "TikTok",
		icon: "res/tiktok.svg",
		link: "https://www.tiktok.com/"
	},
	{
		name: "Y8",
		icon: "res/y8.svg",
		link: "https://www.y8.com"
	}
]);

function updateShortcuts() {
	shortcutBar.innerHTML = "";
	for (let i = 0; i < shortcuts.length; i++) {
		let s = shortcuts[i];
		let item = document.createElement("div");
		item.className = "shortcut-item";
		item.onclick = () => openUrl(s.link);
		item.oncontextmenu = (e) => {
			e.preventDefault();
			e.stopPropagation();
			shortcutContextMenu.style.top = e.clientY + "px";
			shortcutContextMenu.style.left = e.clientX + "px";
			shortcutContextMenu.style.display = "block";
			document.getElementById("delete-shortcut").onclick = () => {
				shortcuts.remove(s);
				storage.shortcuts = shortcuts;
				updateShortcuts();
			};
			document.getElementById("edit-shortcut").onclick = async () => {
				let result = await form("", "Edit shortcut", [
					{
						label: "Name",
						input: {
							type: "text",
							placeholder: "Name",
							value: s.name
						}
					},
					{
						label: "URL",
						input: {
							type: "text",
							placeholder: "https://example.com/example",
							value: s.link
						}
					}
				]);

				if (result == null)
					return; // canceled

				let name = result[0].value;
				let url = result[1].value;

				if (name.length == 0) {
					alert("Name cannot be empty.");
					return;
				}

				if (url.length == 0) {
					alert("URL cannot be empty.");
					return;
				}

				try {
					url = new URL(url).href;
				} catch(e) {
					alert("Invalid URL. A valid URL must start with http:// or https://");
					return;
				}

				s.name = name;
				s.link = url;
				updateShortcuts();
			};
		};

		let icon = document.createElement("img");
		icon.className = "shortcut-item-icon";
		icon.width = 60;
		icon.height = 60;
		icon.src = s.icon;
		item.appendChild(icon);

		let text = document.createElement("text");
		text.className = "shortcut-item-text";
		text.innerHTML = s.name;

		item.appendChild(text);
		shortcutBar.appendChild(item);
	}
	shortcutBar.appendChild(addShortcutButton);
}
updateShortcuts();

urlInput.onkeydown = (e) => {
	if (e.keyCode == 13) {
		e.preventDefault();
		run(googleSearch, false);
	}
};
document.getElementById("search-button").onclick = () => {
	run(googleSearch, true);
};
document.getElementById("random-button").onclick = () => {
	run(googleSearchR, true);
};
document.getElementById("clear-site-data").onclick = async () => {
	window.sessionStorage.clear();
	window.localStorage.clear();
	let databases = await indexedDB.databases();
	for (let i = 0; i < databases.length; i++)
		indexedDB.deleteDatabase(databases[i].name);
};
document.getElementById("clear-cache").onclick = async () => {
	let keys = await caches.keys();
	for (let i = 0; i < keys.length; i++)
		await caches.delete(keys[i]);
};
document.getElementById("leave-without-history").onclick = () => {
	window.location.replace(new URL("https://google.com/"));
};
addShortcutButton.onclick = async () => {
	let result = await form("", "Add shortcut", [
		{
			label: "Name",
			input: {
				type: "text",
				placeholder: "Name"
			}
		},
		{
			label: "URL",
			input: {
				type: "text",
				placeholder: "https://example.com/example"
			}
		}
	]);

	if (result == null)
		return; // canceled

	let name = result[0].value;
	let url = result[1].value;

	if (name.length == 0) {
		alert("Name cannot be empty.");
		return;
	}

	if (url.length == 0) {
		alert("URL cannot be empty.");
		return;
	}

	try {
		url = new URL(url).href;
	} catch(e) {
		alert("Invalid URL. A valid URL must start with http:// or https://");
		return;
	}

	shortcuts.push({
		name: name,
		icon: (() => {
			let favicon = new URL(url);
			favicon.pathname = "/favicon.ico";
			favicon.search = "";
			return favicon.href;
		})(),
		link: url
	});

	updateShortcuts();
};

document.body.onclick = () => {
	contextMenu.style.display = "none";
	shortcutContextMenu.style.display = "none";
};
document.oncontextmenu = (e) => {
	e.preventDefault();
	contextMenu.style.top = e.clientY + "px";
	contextMenu.style.left = e.clientX + "px";
	contextMenu.style.display = "block";
};
document.getElementById("version").innerHTML = app.cacheVersion;

document.getElementById("settings").onclick = async () => {
	let result = await form("", "Settings", [
		{
			label: "Server address",
			input: {
				type: "text",
				value: __uv$config.bare,
				disabled: true
			}
		},
		{
			label: "Reduce history logging",
			input: {
				type: "checkbox",
				checked: storage.getItem("reduceHistoryLogging", false)
			}
		},
		{
			label: "Note: By enabling this, the history logging caused by your browser will be reduced as the navigation-bar URL is hidden. \
However it will not fully prevent history logging. To fully prevent history logging, leave this page with the option in the right-click menu."
		}
	]);

	if (result == null)
		return; // canceled

	storage.reduceHistoryLogging = result[1].checked;
};

function isUrl(str) {
	try {
		return new URL(str).href;
	} catch(err) {
		return null;
	}
}

function isHostname(str) {
	let containsSlash = str.includes("/");
	if (containsSlash)
		str = str.substring(0, str.indexOf("/"));

	if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))$/.test(str))
		return containsSlash || str.includes(".");
	return false;
}

function fixUrl(url, searchUrl, searchOnly) {
	url = url.replace(/^\s+|\s+$/gm, "");

	if (searchOnly)
		return searchUrl + encodeURIComponent(url);
	if (isUrl(url))
		return url;
	if (isHostname(url))
		return "https://" + url;

	return searchUrl + encodeURIComponent(url);
}

function openUrl(url) {
	let win = storage.getItem("reduceHistoryLogging", false) ? (() => {
		let frame = document.createElement("iframe");
		frame.setAttribute("type", "text/plain");
		frame.setAttribute("width", "1024");
		frame.setAttribute("height", "768");
		frame.setAttribute("style", "position:absolute;display:block;width:100%;height:100%;top:0px;left:0px;right:0px;bottom:0px;border:none;");
		frame.setAttribute("scrolling", "no");
		frame.setAttribute("loading", "eager");
		frame.setAttribute("allowfullscreen", "true");
		frame.setAttribute("allowtransparency", "true");
		frame.setAttribute("fetchpriority", "high");
		document.body.appendChild(frame);

		history.pushState(void 0, "", "");
		window.onpopstate = () => {
			frame.remove();
		};

		return frame.contentWindow;
	})() : window;

	win.location = new URL(window.location.origin +  __uv$config.prefix + __uv$config.encodeUrl(url));
}

function run(searchUrl, searchOnly) {
	let url = fixUrl(urlInput.value, searchUrl, searchOnly);
	openUrl(url);
}

})();

console.log("%cPage Verified", `position: relative;display: block;width: fit-content;height: fit-content;color: #ffffff;background-color: #008000;font-size: 14px;font-weight: 600;font-family: "Ubuntu Mono";font-stretch: normal;text-align: start;text-decoration: none;`);

chrome.storage.sync.get({
  navbarColor: null,
}, function(items) {
  console.log(items);
  if (items.navbarColor) {
    var css = `.awsc-switched-role-username-wrapper > .nav-elt-label { color: ${items.navbarColor} !important; }`;
    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
});

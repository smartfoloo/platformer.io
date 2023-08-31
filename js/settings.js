var tab = localStorage.getItem("tab");

if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

var settingsDefaultTab = {
  title: "Platformer.io",
  icon: "/favicon.png",
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak() {
  var cloak = document.getElementById("premadecloaks").value;
  switch (cloak) {
    case "search":
      setTitle("Google");
      setFavicon("./images/cloaks/Google Search.ico");
      location.reload();
      break;
    case "itchio":
      setTitle("Top free NSFW games for web");
      setFavicon("./images/cloaks/D23D344B-4CB0-4799-B525-F4E4F3A36728.ico");
      location.reload();
      break;
    // ... (other cases removed for brevity)
  }
}

function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
  document.body.style = "";
  localStorage.removeItem("theme_color");

  themes.forEach((palette) => {
    if (palette.theme == theme) {
      document.querySelector("#theme_color").value = palette.color;
    }
  });
}

function setThemeColor(theme) {
  localStorage.setItem("theme", "custom");
  localStorage.setItem("theme_color", theme);
  document.body.setAttribute("theme", "custom");
  document.body.style = `--theme: ${theme}; --background: ${getContrastHex(theme)}; --text: ${getColorHex(theme)}; --text-secondary: ${getColorHex(theme)};`;
}

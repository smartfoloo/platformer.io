var allowedDomains = [
  "https://platformerdotio.co",
  "https://platformerdotio.netlify.app",
  "https://platformerdotio.onrender.com",
];

var referringUrl = document.referrer;

var isAllowedDomain = allowedDomains.some(function (domain) {
  return referringUrl.indexOf(domain) !== -1;
});

if (!isAllowedDomain) {
  window.location.href = allowedDomains[0];
}
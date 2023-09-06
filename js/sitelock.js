const allowedFileURLs = [
  'https://platformerdotio.co/play.html',
  'https://platformerdotio.onrender.com/play.html',
];

const currentURL = window.location.href;

if (!allowedFileURLs.some(allowedURL => currentURL === allowedURL || currentURL.startsWith(allowedURL + '?'))) {
  window.location.href = 'https://platformerdotio.co/';
}
const allowedDomains = [
  {
    domain: 'platformerdotio.co',
    directories: ['/games']
  },
  {
    domain: 'platformerdotio.onrender.com',
    directories: ['/games']
  }
];

const currentDomain = window.location.hostname;
const domainEntry = allowedDomains.find(entry => entry.domain === currentDomain);

if (!domainEntry) {
  window.location.href = 'https://platformerdotio.co';
} else {
  const currentPath = window.location.pathname;
  const isNotAllowed = !domainEntry.directories.some(allowedDir => currentPath.startsWith(allowedDir));
  const redirectURL = 'https://' + currentDomain;
  if (isNotAllowed) {
    window.location.href = redirectURL;
  }
}

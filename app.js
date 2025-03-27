const fs = require('fs');
const os = require('os');

const version = process.env.VERSION || '1.0.0';

function getIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

const html = `
<html>
  <head><title>Server Info</title></head>
  <body>
    <h1>Server Information</h1>
    <p><strong>IP Address:</strong> ${getIpAddress()}</p>
    <p><strong>Hostname:</strong> ${os.hostname()}</p>
    <p><strong>App Version:</strong> ${version}</p>
  </body>
</html>
`;

fs.writeFileSync('./index.html', html);
console.log('HTML file generated');
process.exit(0);
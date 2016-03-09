var fs = require('fs');

module.exports = {
  privateKey: fs.readFileSync('./ssh_id_rsa', 'utf8'),
  publicKey: fs.readFileSync('./ssh_id_rsa.pub', 'utf8')
};

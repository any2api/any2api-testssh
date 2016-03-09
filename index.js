const fs = require('fs');
const exec = require('child_process').exec;

module.exports = {
  privateKey: fs.readFileSync('./ssh_id_rsa', 'utf8'),
  publicKey: fs.readFileSync('./ssh_id_rsa.pub', 'utf8'),
  startServer: (name, port, done) => {
    name = name || 'testssh';
    port = port || '2222';

    exec(`docker run --name ${name} -d -p ${port}:22 any2api/testssh`, done);
  },
  stopServer: (name, done) => {
    name = name || 'testssh';

    exec(`docker kill ${name} ; docker rm ${name}`, done);
  }
};

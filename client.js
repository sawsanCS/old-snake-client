const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,
    name: 'SSM'  });
    
  conn.on ('data', (data) => {
    console.log('Successfully connected to game server');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Name: SSM');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

connect();
module.exports = {connect, connect};
/*({
  host: host, 
  port: port
});*/

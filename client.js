const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    });
    
  conn.on ('data', (data) => {
    console.log('Successfully connected to game server');
    
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    let t = 0; 

    conn.write('Name: SSM');
    setTimeout(function() {
      conn.write("Move: right");//print char
    }, t+=500);
    ;
    setTimeout(function() {
      conn.write("Move: up");//print char
    }, t+=1000);
    setTimeout(function() {
      conn.write("Move: left");//print char
    }, t+=1500);
   // conn.write("Move: up");
   // conn.write("Move: left");
   // conn.write("Move: up");
    
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = {connect, connect};
/*({
  host: host, 
  port: port
});*/

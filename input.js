let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(key) {
    if(key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {connection.write('Move: up'); console.log('up');};
    if (key === 's') {connection.write('Move: down'); console.log('down');};
    if (key === 'a') {connection.write('Move: left'); console.log('left');};
    if (key === 'd') {connection.write('Move: right'); console.log('right');};
    if (key === 'q') {connection.write('Say: Respect each other'); };
    /*if (key === 's') {conn.write('Move: down'); console.log('down');};
    if (key === 'a') {conn.write('Move: left'); console.log('left');};
    if (key === 'd') {conn.write('Move: right'); console.log('right');};*/
    
  }
  stdin.on('data', handleUserInput) //callback to pass any key strokes to hUI;
  return stdin;
};
module.exports = {setupInput, setupInput};
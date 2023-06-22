//Importacion del modulo global http
const http = require("http");

/* function requestListener(req, res) {
    //puede ser una funcoin anonima
} */
//requestListener

//Creacion de servidor web
//Habitualmente el oyente de solicitudes es un arrow function
//Guardamos el server retornado por createServer(), en una constante
const server = http.createServer((req, res) => {
  const url = req.url;
  /* console.log(req.url, req.method, req.headers); */
  //Cerrar o salir del ciclo continuo de eventos
  /* process.exit(); */

  //routing
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My first response page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first response page</title></head>");
  res.write("<body><h1>Hello from Node JS duuuuuude</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);

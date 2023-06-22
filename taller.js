const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  switch (url) {
    case "/":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/shopping">Shopping</a></li>
            </ul>
            <h2>Info VentaArtemis</h2>
            <ul>
                <li>Direccion:Calle 21 #23-12</li>
                <li>Telefono:3124264728</li>
                <li>Correo:ventartemis@gmail.com</li>
            </ul>
            </body>`);
      res.write("</html>");
      break;
    case "/users":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/shopping">Shopping</a></li>
            </ul>
            <h2>Users</h2>
            <ul>
                <li>Usuario 1</li>
                <li>Nombre:Cristian Luna</li>
                <li>Edad:21</li>
                <li>Telefono:3017488020</li>
                <li>Correo:cristian@gmail.com</li>
            </ul>
            <ul>
                <li>Usuario 2</li>
                <li>Nombre:Sebastian Bernal</li>
                <li>Edad:20</li>
                <li>Telefono:3125672838</li>
                <li>Correo:sebastian@gmail.com</li>
            </ul>
            <ul>
                <li>Usuario 3</li>
                <li>Nombre:Juan Sanchez</li>
                <li>Edad:17</li>
                <li>Telefono:3136274839</li>
                <li>Correo:sanchez@gmail.com</li>
            </ul>
            </body>`);
      res.write("</html>");
      break;

    case "/categories":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
              <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/shopping">Shopping</a></li>
              </ul>
              <h2>Categories</h2>
              <table>
                  <thead>
                      <th>Categoria</th>
                      <th>Detalles</th>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Electrodomesticos</td>
                          <td>Electrodomesticos para el hogar</td>
                      </tr>
                      <tr>
                          <td>Vehiculos</td>
                          <td>Repuestos para vehiculos</td>
                      </tr>
                  </tbody>
              </table>    
              </body>`);
      res.write("</html>");
      break;

    case "/productos":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/shopping">Shopping</a></li>
            </ul>
            <h2>Products</h2>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Marca</th>
                    <th>Categoria</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Nevera</td>
                        <td>450000</td>
                        <td>70</td>
                        <td>LG</td>
                        <td>Electrodomesticos</td>
                    </tr>
                    <tr>
                        <td>Puerta</td>
                        <td>700000</td>
                        <td>5</td>
                        <td>BMW</td>
                        <td>Vehiculos</td>
                    </tr>
                </tbody>
            </table>    
            </body>`);
      res.write("</html>");
      break;

    case "/employees":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/shopping">Shopping</a></li>
            </ul>
            <h2>EMPLEADOS</h2>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Documento</th>
                    <th>Telefono</th>
                    <th>Cargo</th>
                </thead>
                <tbody>
                    <tr>
                        <td>David Diaz</td>
                        <td>32</td>
                        <td>1005231454</td>
                        <td>312423567</td>
                        <td>Mecanico</td>
                    </tr>
                    <tr>
                        <td>Johan Perez</td>
                        <td>22</td>
                        <td>1005283542</td>
                        <td>3125326435</td>
                        <td>Vendedor</td>
                    </tr>
                </tbody>
            </table>    
            </body>`);
      res.write("</html>");
      break;

    case "/customers":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/sales">Sales</a></li>
                <li><a href="/shopping">Shopping</a></li>
            </ul>
            <h2>Customers</h2>
            <a href="/agregar">Agregar customer</a>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Producto</th>
                    <th>Total</th>
                    <th>Tipo Pago</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Luis Lopez</td>
                        <td>1005278456</td>
                        <td>Puerta</td>
                        <td>750000</td>
                        <td>Efectivo</td>
                    </tr>
                    <tr>
                        <td>Maria Aristizabal</td>
                        <td>10054672839</td>
                        <td>Nevera</td>
                        <td>45000</td>
                        <td>Trajeta</td>
                    </tr>
                </tbody>
            </table>    
            </body>`);
      res.write("</html>");

      break;

    case "/sales":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/shopping">Shopping</a></li>
            </ul>
            <h2>Sales</h2>
            <table>
                <thead>
                    <th>Cliente</th>
                    <th>Empleado</th>
                    <th>Producto</th>
                    <th>Fecha</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Luis Lopez</td>
                        <td>David Diaz</td>
                        <td>Puerta</td>
                        <td>22/05/2023</td>
                        <td>75000</td>
                    </tr>
                    <tr>
                        <td>Maria Aristizabal</td>
                        <td>Johan Perez</td>
                        <td>Nevera</td>
                        <td>12/02/2023</td>
                        <td>45000</td>
                    </tr>
                </tbody>
            </table>    
            </body>`);
      res.write("</html>");

      break;
    case "/shopping":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/categories">Categorias</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/employees">Employes</a></li>
                <li><a href="/customers">Customers</a></li>
                <li><a href="/sales">Sales</a></li>
            </ul>
            <h2>Shopping</h2>
            <table>
                <thead>
                    <th>Ubicacion</th>
                    <th>Tamaño</th>
                    <th>Empleados</th>
                    <th>Telefono</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Transversal 153 #32</td>
                        <td>250m</td>
                        <td>15</td>
                        <td>3124365789</td>
                    </tr>
                    <tr>
                        <td>Calle 32 #24-54</td>
                        <td>125m</td>
                        <td>7</td>
                        <td>3124536435</td>
                    </tr>
                </tbody>
            </table>    
            </body>`);
      res.write("</html>");
      break;

    case "/agregar":
      res.write("<html>");
      res.write("<head><title>Venta Artemis</title></head>");
      res.write(`<body><h1>VentArtemis</h1>
            <form action="/customers" method="post">
            <label for="">Nombre</label>
            <input type="text" placeholder="Nombre" name="nombre">
            <br>
            <label for="">Documento</label>
            <input type="text" placeholder="Documento" name="documento">
            <br>
            <label for="">Producto</label>
            <input type="text" placeholder="Nombre Producto" name=nombreProducto"">
            <br>
            <label for="">Total</label>
            <input type="text" placeholder="Total" name="total">
            <br>
            <label for="">Tipo Pago</label>
            <input type="text" placeholder="Tipo de pago" name="tipoPago">
            <br>
            <input type="submit" value="Agregar Clientes">
            </form>
            </body>`);
      res.write("</html>");
      break;
  }
});

server.listen(7000);

const { useState, useEffect } = React;

function Tienda() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => console.error("Error cargando productos:", error));
  }, []);

  if (cargando) {
    return <p className="text-center mt-5">Cargando productos...</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Tienda Online</h1>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-3 mb-4" key={producto.id}>
            <div className="card producto-card h-100">
              <img src={producto.image} className="card-img-top p-3" alt={producto.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text descripcion">{producto.description}</p>
                <p className="card-text fw-bold mt-auto">${producto.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tienda />);

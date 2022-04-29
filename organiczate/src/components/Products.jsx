/* Todos los productos */

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Products() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/product`);
        const listItems = await response.json();
        setData(listItems);
        setFilter(listItems);
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
    getProducts();
  }, [])

  function Loading() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
          </div>
        </div>
      </>
    )
  }
  // Filtro de productos que se llama desde los botones de ShowProducts

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
    console.log("Ejecutando filtro");
    console.log(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>

        <div className='buttons d-flex justify-content-center mb-5 pb-5'>

          <button className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}>
            Todo
          </button>

          <button className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("frutas")}>
            Frutas
          </button>
          <button className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("verduras")}>
            Verduras
          </button>
          <button className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("productos")}>
            Productos
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.img} className="card-img-top" alt={product.name} height="auto" />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.name}
                    </h5>
                    <p className="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <button className="btn btn-primary" onClick={() => addItem(product)}>
                      Comprar
                    </button>

                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark me-2">
                      Ver producto
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}

      </>
    )

  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>
              Nuevos productos
              <hr />
            </h1>
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>

    </div>
  )
}

export default Products
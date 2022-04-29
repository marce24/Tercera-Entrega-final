import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function AbmProduct() {


    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

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

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <NavLink to={`/createproduct/`} className="btn btn-success">
                        Crear nuevo Producto
                    </NavLink>

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
                                        <NavLink to={`/updateproduct/${product.id}`} className="btn btn-warning">
                                            Editar
                                        </NavLink>
                                        <button className="btn btn-danger" onClick={() => DeleteProduct(product)}>
                                            Eliminar
                                        </button>
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
                            Agregar / Modificar / Eliminar Productos:
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


    function DeleteProduct(product) {
        let id = product.id;
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                window.location.reload(true);
            });
    }

}


export default AbmProduct;
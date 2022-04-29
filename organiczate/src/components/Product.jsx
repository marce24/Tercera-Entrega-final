/* Producto Solo para ver detalles y agregar al carrito*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';



const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { addItem } = useCart();


    // Me traigo el elemento del Json-server con un fetch, identificado por el ID

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/product/${id}`);
                setProduct(await response.json());
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                            <img src={product.img} alt={product.name} height="400px" /></div>
                        <div className='col-12 text-center py-4 my-4'>
                            <h1 className='text-black fw-bold mb-4'>{product.name}</h1>
                            <h2 className='my-4'>${product.price}</h2>
                            <p className='lead mb-4'>{product.description}</p>
                            <button onClick={() => addItem(product)} className='btn btn-outline-primary my-5'>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5"></div>
            <div className="row py-4"></div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
}

export default Product
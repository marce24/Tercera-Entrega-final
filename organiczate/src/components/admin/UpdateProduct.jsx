import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function UpdateProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [category, setCategory] = useState();
    const [img, setImg] = useState();
    const [message, setMessage] = useState();


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



    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:5000/product/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    price: price,
                    stock: stock,
                    category: category,
                    img: img,
                }),
            });
            if (res.status === 200) {
                setName("");
                setDescription("");
                setPrice("");
                setStock("");
                setCategory("");
                setImg("");
                setMessage("La Modificación se realizó con éxito");
                window.location.reload(true);
            } else {
                setMessage("Ha ocurrido un error");
            }
        } catch (err) {
            console.log(err);
        }
    };



    const ShowProduct = () => {
        return (
            <>
                <div className="container py-5">
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>$ {product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.category}</td>
                                <td><img src={product.img} alt={product.name}></img></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5"></div>
            <div className="row py-4"></div>
            {loading ? <Loading /> : <ShowProduct />}

            {/* Escribo el contenido que viaja como JSON hacia el server para actualizar el producto */}

            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <form onSubmit={handleSubmit} >
                    <label className="p-3 mb-2 bg-secondary text-white">Escribe sólo en los campos que deseas modificar</label>
                    <div className="mb-3">
                        <label className="form-label">Nuevo nombre</label>

                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripción</label>

                        <textarea
                            className="form-control"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} >
                        </textarea>

                    </div>
                    <label className="form-label">Precio</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input

                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                    </div>
                    <label className="form-label">Stock inicial</label>

                    <input

                        type="number"
                        className="form-control"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)} />
                    <br />
                    <label className="form-label">Seleccione una categoría</label>
                    <select value={category} className="form-select" onChange={(e) => setCategory(e.target.value)} >
                        <option value="productos">Productos</option>
                        <option value="verduras">Verduras</option>
                        <option value="frutas">Frutas</option>
                    </select>
                    <br />
                    <div className="mb-3">
                        <label className="form-label">URL Imagen</label>

                        <input
                            type="text"
                            className="form-control"
                            value={img}
                            placeholder="assets/images/products/imagen.jpg"
                            onChange={(e) => setImg(e.target.value)} />

                    </div>
                    <br />
                    <div className='container mb-5'>
                        <div className='row'>
                            <button type="submit" className="btn btn-success">
                                Guardar cambios
                            </button>
                            <NavLink to={`/admin`} className="btn btn-danger">
                                Volver al Menú Admin
                            </NavLink>
                            <div className="message">{message ? <p>{message}</p> : null}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )


}

export default UpdateProduct



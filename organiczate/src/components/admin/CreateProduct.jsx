import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CreateProduct() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/product", {
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
        setMessage("Producto creado correctamente");
      } else {
        setMessage("Ha ocurrido un error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label">Nombre producto</label>

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
        <button type="submit" className="btn btn-success">
          Crear nuevo Producto
        </button>
        <NavLink to={`/admin`} className="btn btn-danger">
          Volver al Menú Admin
        </NavLink>
        <div className="message">{message ? <p>{message}</p> : null}</div>

      </form>
    </div>
  )
}

export default CreateProduct
import React, { useState } from "react"

function Signup() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          email: email,
          password: password,
        }),
      });
      if (res.status === 200) {
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
        setMessage("Se ha creado el usuario");
      } else {
        setMessage("Ha ocurrido un error");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className='fa fa-user-plus me-1' />
        Registrarse
      </button>
      <div className="modal fade" id="signupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Registrarse</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-2">
                <span className='fa fa-google me-2' />
                Registrarse con Google
              </button>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    required
                    onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    value={apellido}
                    required
                    onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">
                  Registrarme
                </button> 
                <div className="message">{message ? <p>{message}</p> : null}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
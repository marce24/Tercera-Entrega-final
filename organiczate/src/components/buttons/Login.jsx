import React, { useState } from 'react'


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [localtoken, setLocaltoken] = useState();

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:5000/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer token'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            if (res.status === 200) {
                setLocaltoken(res);
                console.log(localtoken);
                console.log(res.token);
                setEmail("");
                setPassword("");
                setMessage("Correctamente logeado");
            } else {
                setMessage("Usuario o Contraseña incorrecta");
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className='fa fa-sign-in me-1' />
                Ingresar
            </button>
            <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Ingresar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
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
                                    Ingresar
                                </button>
                                <div className="message">{message ? <p>{message}</p> : null}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    /* return (
        <>
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className='fa fa-sign-in me-1' />
                Ingresar
            </button>

            <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Ingresar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-2">
                                <span className='fa fa-google me-2'/>Ingresa con Google
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail11" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">No compartiremos tu e-mail con nadie.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword11"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck11"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Recordar usuario</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100">Ingresar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    ) */
}

export default Login
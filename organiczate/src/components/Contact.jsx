import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 text-center py-4 my-4'>
                        <h1>Puedes consultarnos tus dudas:</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md 5 d-flex justif-content-center'>
                        <img src='/assets/images/message.jpg' alt="mensaje" height="300px" width="450px" />
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div class="mb-3">
                                <label htmlFor="exampleForm" class="form-label">Nombre</label>
                                <input type="email" class="form-control" id="exampleForm"/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" class="form-label">E-Mail</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar mensaje</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
// Formulario de pago
import React from 'react'

const Checkout = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-7 col-lg-8" />
          <h4 className="mb-3">Direccion de envío</h4>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="name" required="" />
                <div className="invalid-feedback">
                  Ingresa tu Nombre
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="lastname" required="" />
                <div className="invalid-feedback">
                  Ingresa tu Apellido
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" value="username" required="" />
                  <div className="invalid-feedback">
                    Ingresa tu Usuario
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" value="email" />
                <div className="invalid-feedback">
                  Ingresa tu Email
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Dirección de envío</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" value="address" required="" />
                <div className="invalid-feedback">
                  Ingresa tu Dirección
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">Vivienda <span className="text-muted">(Casa o apartamento)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value="apartamentorsuite" />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Ciudad</label>
                <select className="form-select" id="country" required="">
                  <option value="">Seleccionar...</option>
                  <option>Montevideo</option>
                  <option>Canelones</option>
                </select>
                <div className="invalid-feedback">
                  Por favor seleeciona tu ciudad
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">Barrio</label>
                <select className="form-select" id="state" required="">
                  <option value="">Selecciona...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Selecciona tu barrio
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Codigo Postal</label>
                <input type="text" className="form-control" id="zip" placeholder="" required="" value="zip"/>
                <div className="invalid-feedback">
                  Ingresa tu codigo postal
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address" />
              <label className="form-check-label" htmlFor="same-address">La Dirección que ingresé es donde recibiré el pedido</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info" />
              <label className="form-check-label" htmlFor="save-info">Guardar información para futuras compras</label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Medios de pago</h4>

            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                <label className="form-check-label" htmlFor="credit">Tarjeta de crédito</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                <label className="form-check-label" htmlFor="debit">Tarjeta de débito prepaga</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                <small className="text-muted">Nombre completo</small>
                <div className="invalid-feedback">
                  Ingrese el nombre que figura en la tarjeta
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Numero de tarjeta</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                <div className="invalid-feedback">
                  Debe ingresar un número de tarjeta
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Vencimiento</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                <div className="invalid-feedback">
                  Ingrese Vencimiento
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                <div className="invalid-feedback">
                  Debe ingresar el CVV
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar al checkout</button>
          </form>
        </div>
      </div>
    </>

  )
}




export default Checkout
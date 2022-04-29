import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1>Carrito vacío</h1>
    return (
        <>
            <section>
                <div>
                    <h5>Productos ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0 cart'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Cantidad ({item.quantity})</td>
                                        <td>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Quitar item</button>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total: ${cartTotal}</h2>
                </div>
                <div className='col-auto'>
                    <NavLink className="btn btn-primary w-25" to="/checkout">
                        PAGAR
                    </NavLink>
                    <button className='btn btn-danger m-2 w-25' onClick={() => emptyCart()}> Vaciar carrito </button>
                </div>
            </section>
        </>
    );
}

export default Cart
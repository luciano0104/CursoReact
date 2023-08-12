import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


export const Checkout = () => {
 
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        RepetirEmail: "",
        Telefono: ""
    })
    const { Nombre, Email, RepetirEmail, Telefono } = buyer

    const { cart } = useContext(CartContext)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
        const dia = new Date()
        const data = { buyer, cart, total, dia }
        generateOrder(data)
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <>
            <h1>Formulario</h1>
            <hr />
            {!orderId && <form onSubmit={handleSubmit}>
                <input type="text"
                    name="Nombre"
                    placeholder='Nombre'
                    value={Nombre}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="email"
                    name="Email"
                    placeholder='Email'
                    value={Email}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="email"
                    name="RepetirEmail"
                    placeholder='RepetirEmail'
                    value={RepetirEmail}
                    onChange={handleInputChange}
                    required
                />
                <br></br>
                <input type="number"
                    name="Telefono"
                    placeholder='Telefono'
                    value={Telefono}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="submit" value="Confirmar Compra" />
            </form>
            }
            {orderId && <>
                <h1>Felicitaciones tu compra se realizo con exito</h1>
                <h3>Tu ID de Compra es: {orderId}</h3>
            </>}
        </>
    )
}
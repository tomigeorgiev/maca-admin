import React from 'react'
import { useState } from 'react'

const Order = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [number, setNumber] = useState();
    const [city, setCity] = useState();

    const Push = () => {

    }

    return (
        <div className='d-flex justify-content-center pt-5'>
            <form className='form w-75'>
                <h2>Поръчка</h2>
                <hr/>
                <div className='my-2 '>
                    {/* <p>Имена</p> */}
                    <input type='text' className='form-control' placeholder='Имена' value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' />
                </div>
                <div className='my-2'>
                    {/* <p>Email</p> */}
                    <input type='email' placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' />
                </div>
                <div className='my-2'>
                    {/* <p>Телефонен номер</p> */}
                    <input type='tel' placeholder='Телефонен номер' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} id='phone' name='phone' />
                </div>
                <hr/>
                <div className="">
                    <h3>Доставка</h3>

                    <input type="radio" name="topping" value="Regular" id="regular" />
                    <label className='mx-2' htmlFor="regular">До Адрес</label>

                    <input type="radio" name="topping" value="Medium" id="medium" />
                    <label className='mx-2' htmlFor="medium">До офис</label>
                </div>
                <div className='my-2'>
                    {/* <p>Адрес</p> */}
                    <input type='text' placeholder='Населено място' className='form-control' value={city} onChange={(e) => setCity(e.target.value)} id='address' name='address' />
                </div>
                <div className='my-2'>
                    {/* <p>Адрес</p> */}
                    <input type='text' placeholder='Адрес' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} id='address' name='address' />
                </div>
                <hr/>
                <button className='btn btn-dark' onClick={Push}>Поръчай</button>
            </form>
        </div>
    )
}

export default Order
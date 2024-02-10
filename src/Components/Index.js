import React from 'react'

import './style.css'
import logo from "./images/macamini.png"

const Index = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark text-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Maca Admin</a>
                    
                </div>
            </nav> 
            <div className='container text-center mt-5 p-5'>
                <h2>Manicure Cards Challenge</h2>
                <hr/>
                <h4 className='my-3'>Website Administrator</h4>
                <a href='https://macachallenge.com' className='btn btn-dark mx-2'>macachallenge.com</a>
                <a href='https://macachallenge.com' className='btn btn-danger mx-2'>Поръчки</a>
                <a href='https://macachallenge.com' className='btn btn-primary mx-2'>Aбонаменти</a>
                {/* <a href='https://macachallenge.com' className='btn btn-success disabled mx-2'>Друго</a> */}
            </div>
        </div>
    )
}

export default Index
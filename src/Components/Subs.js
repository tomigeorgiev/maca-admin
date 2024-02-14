import React from 'react'
import { useState, useEffect, useRef } from 'react'

import '../firebase'
import { getDoc, getDocs, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from "../firebase";
import { getDownloadURL, list, listAll } from 'firebase/storage';
import { storage } from '../firebase'
import { ref, uploadBytes } from "firebase/storage"

import JoditEditor from 'jodit-react';

const Subs = () => {
    const [emailList, setEmailList] = useState([]);
    const emailsCollectionRef = collection(db, "emails");

    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        const getEmails = async () => {
            const data = await getDocs(emailsCollectionRef);
            setEmailList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getEmails();
    }, []);

    const deleteEmail = async (id) => {
        const emailDoc = doc(db, 'emails', id);
        await deleteDoc(emailDoc);
        window.location.reload();
    }

    const updateStatus = async id => {
        try {
            const emailDocRef = doc(db, 'emails', id);
            const emailDocSnapshot = await getDoc(emailDocRef);

            if (emailDocSnapshot.exists()) {
                const currentStatus = emailDocSnapshot.data().status;
                const newStatus = currentStatus === 'Активен' ? 'Неактивен' : 'Активен';

                await updateDoc(emailDocRef, { status: newStatus });

                setEmailList(prevState =>
                    prevState.map(email =>
                        email.id === id ? { ...email, status: newStatus } : email
                    )
                );
            } else {
                console.log('Няма такова');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const openForm = () => {
        let emailForm = document.getElementById('sendEmailForm');
        emailForm.style.display = 'block';
    }
    const closeForm = () => {
        let emailForm = document.getElementById('sendEmailForm');
        emailForm.style.display = 'none';
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark p-3 text-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Maca Admin ~<i className='mx-2 text-secondary'>Абонаменти</i></a>
                </div>
                <button onClick={openForm} className='btn btn-warning mx-2 px-5 d-flex'>Напиши</button>
                <a href='/' className='btn btn-light mx-2'>Назад</a>

            </nav>
            <div className='container m-5' id='sendEmailForm'>
                <form className='mx-4'>
                    <h3>Напиши имейл на активните абонати</h3>
                    <JoditEditor
                        className=''
                        ref={editor}
                        onChange={setContent}
                    />
                    <button className='btn btn-outline-primary my-2 mx-2 px-5 py-2'>Изпрати</button>
                    <button onClick={closeForm} className='btn btn-danger my-2 px-3 py-2'><i class="fa-solid fa-x"></i></button>
                </form>
            </div>
            <div className='container mx-5 my-5 px-5'>
                <ul class="list-group">
                    <li class="row list-group-item active bg-dark d-flex" aria-current="true">
                        <div className='col d-flex justify-content-center p-3 h5'>
                            Активни абонирани имейли <div className='mx-2 bg-secondary px-2 text-light rounded'> {emailList.length}</div>
                        </div>
                    </li>
                    <li class="row list-group-item bg-light d-flex" aria-current="true">
                        <div className='col-md-8 d-flex'>
                            Бутони за управление | Имейл
                        </div>

                        <div className='col d-flex justify-content-end'>
                            <div className='mx-5'>
                                Добавен
                            </div>
                            <div className='mx-4'>
                                Статус
                            </div>
                        </div>
                    </li>
                    {emailList.map((email) => {
                        console.log(email)
                        return (
                            <li class="row list-group-item d-flex">
                                <div className='col-md-6 d-flex'>
                                    <button
                                        onClick={() => { deleteEmail(email.id) }}
                                        className='btn btn-danger mx-2'><i class="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button
                                        onClick={() => { updateStatus(email.id) }}
                                        className='btn btn-light mx-2'><i class="fa-solid fa-user-pen"></i>
                                    </button>
                                    <div className='mx-2 p-2'>
                                        <i> {email.email}</i>
                                    </div>
                                </div>

                                <div className='col-md-6 d-flex justify-content-end'>
                                    <div className='d-flex'>
                                        <b className='p-2 mx-3'>{email.datata ? new Date(email.datata.seconds * 1000).toLocaleDateString('bg-BG') : 'N/A'}</b>
                                        <div className={`py-2 px-4 rounded ${email.status === 'Активен' ? 'bg-success' : 'bg-danger'} text-light`} >{email.status}</div>

                                    </div>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Subs
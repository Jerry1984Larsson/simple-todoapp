"use client"
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'

const AddTask = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => setOpenModal(true)} className='btn btn-primary w-full'>Add new task<AiOutlinePlus className='ml-2' size={18} /></button>
            <Modal openModal={openModal} setOpenModal={setOpenModal}>Modal for add Todo</Modal>
        </div>)
}
export default AddTask
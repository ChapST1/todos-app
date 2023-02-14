import { useState } from "react"
import { motion } from "framer-motion"
import { IoColorWandOutline } from "react-icons/io5"

export function TodoEdit({ item, handleUpdate, setEdit }) {
    const [newValue, setNewValue] = useState(item.todo)
    const handleChange = (e) => {
        setNewValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdate(item.id, newValue)
        setEdit(false)
    }
    return (
        <motion.form className="  flex gap-2  w-[fit-content] py-1" onSubmit={handleSubmit} layout>
            <motion.input type="text" className="text-white text-[10px] outline-none px-2 rounded-sm bg-[#222222] duration-300 focus:shadow-unique md:text-[18px] md:py-2" value={newValue} onChange={handleChange} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            <button className="text-gray-400 px-2 py-1 text-[10px] "><IoColorWandOutline className="md:text-3xl" /></button>
        </motion.form>
    )
}
import iconCheck from "../assets/check.svg"
import { motion } from "framer-motion"
import { IoTrashOutline, IoBrushOutline } from "react-icons/io5";

export function ShowTodo({ item, completed, setCompleted, handleDelete, setEdit }) {
    const handleComplete = () => setCompleted((prev) => !prev)
    const handleEdit = () => setEdit(true)
    const onDelete = () => handleDelete(item.id)

    return (
        <>
            <img src={iconCheck} alt="icon-check" className={`w-[20px]  duration-1000 cursor-pointer ${completed ? "opacity-100 " : "opacity-25"} md:w-[30px]`} onClick={handleComplete} />
            <h2 className={`grow-[1] duration-1000 text-[18px] ${completed ? "text-[#fff] line-through" : "text-gray-500"} md:text-2xl`}>{item.todo}</h2>
            <motion.button className={`text-blue-300 text-[15px] duration-300  md:text-2xl ${completed ? "pointer-events-none" : ""}`} onClick={handleEdit} whileTap={{ scale: 0.9 }} ><IoBrushOutline /></motion.button>
            <motion.button className={`duration-300 text-red-300 text-[15px] md:text-2xl md:py-0 ${completed ? "pointer-events-none" : ""}`} onClick={onDelete} whileTap={{ scale: 0.9 }} ><IoTrashOutline /></motion.button>
        </>
    )
}
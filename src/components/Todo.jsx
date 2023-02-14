import { useState } from "react"
import { TodoEdit } from "./TodoEdit";
import { ShowTodo } from "./ShowTodo";
import { motion } from "framer-motion";

export function Todo({ item, handleUpdate, handleDelete }) {
    const [edit, setEdit] = useState(false);
    const [completed, setCompleted] = useState(false);

    return (
        <motion.div className={` w-[100%] py-4 m-auto flex items-center justify-between gap-3 mb-2  px-2 rounded-sm bg-[#1a1919] md:py-4 md:w-[60%]`} initial={{ opacity: 0 }} animate={completed ? { opacity: .30 } : { opacity: 1 }} exit={{ opacity: 0 }} layoutId={item.id} >
            {
                edit ?
                    <TodoEdit item={item} handleUpdate={handleUpdate} setEdit={setEdit} />
                    : <ShowTodo item={item} setCompleted={setCompleted} completed={completed} handleDelete={handleDelete} setEdit={setEdit} />
            }
        </motion.div>
    )
}